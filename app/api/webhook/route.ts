import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
    console.log("Stripe event: " + event.type);
    // return new Response("OK", { status: 200 });
  } catch (err: any) {
    console.log("Stripe event: " + err);
    return new NextResponse("Webhook Error", { status: 400 });
  }
  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session.metadata?.userId;
  const courseId = session.metadata?.courseId;

  if (event.type === "checkout.session.completed") {
    if (!userId || !courseId) {
      return new NextResponse("Webhook Error", { status: 400 });
    }
    await db.purchase.create({
      data: {
        userId,
        courseId,
      },
    });
  } else {
    return new NextResponse("Unhandeled event type" + event.type, {
      status: 200,
    });
  }
  return new NextResponse(null, { status: 200 });
}
