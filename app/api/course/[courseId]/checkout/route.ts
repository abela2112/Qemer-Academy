import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(
  req: Request,
  { params: { courseId } }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser();
    if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress)
      return new NextResponse("Unauthorized User", { status: 401 });

    const course = await db.course.findUnique({
      where: {
        id: courseId,
        isPublished: true,
      },
    });
    if (!course) return new NextResponse("Course Not Found", { status: 404 });
    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId,
        },
      },
    });
    if (purchase) return new NextResponse("Already Purchased", { status: 400 });

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(course.price! * 100),
          product_data: {
            name: course.title,
            description: course.description!,
          },
        },
      },
    ];

    let stripeCustomer = await db.stripeCustomer.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        stripeCustomerId: true,
      },
    });
    if (!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses?.[0].emailAddress,
      });
      stripeCustomer = await db.stripeCustomer.create({
        data: {
          userId: user.id,
          stripeCustomerId: customer.id,
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      customer: stripeCustomer.stripeCustomerId,
      success_url: `${process.env.NEXT_PUBLIC_URL}/courses/${courseId}?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/courses/${courseId}?cancel=1`,
      metadata: {
        userId: user.id,
        courseId,
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("courese check out error", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
