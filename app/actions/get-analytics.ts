import { db } from "@/lib/db";
import { Course, Purchase } from "@prisma/client";

type PurchaseWithCourse = Purchase & {
  course: Course;
};

const groupByCourse = (purchases: PurchaseWithCourse[]) => {
  const group: { [title: string]: number } = {};
  purchases.forEach((purchase) => {
    const { title, price } = purchase.course;
    group[title] = (group[title] || 0) + (price || 0);
    // if (!group[purchase.course.title]) {
    //   group[purchase.course.title] = purchase.course.price!;
    // } else {
    //   group[purchase.course.title] += purchase.course.price!;
    // }
  });

  return group;
};
export const getAnalytics = async (userId: string) => {
  console.log("userId", userId);
  try {
    const purchases = await db.purchase.findMany({
      where: {
        userId,
      },
      include: {
        course: true,
      },
    });
    console.log("purchases", purchases);
    const groupEarning = groupByCourse(purchases);

    console.log("groupEarning", groupEarning);
    const data = Object.entries(groupEarning).map(([title, revenue]) => ({
      title,
      revenue,
    }));
    // const totalRevenue = Object.values(groupEarning).reduce(
    //   (a: number, b: number) => a + b,
    //   0
    // );
    const totalRevenue = data.reduce((a: number, b: any) => a + b.revenue, 0);
    const totalSales = purchases.length;
    return {
      totalRevenue,
      totalSales,
      data,
    };
  } catch (error) {
    console.log("get analytics error", error);
    return {
      totalRevenue: 0,
      totalSales: 0,
      data: [],
    };
  }
};
