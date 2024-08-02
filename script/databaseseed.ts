const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();
async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Programming and Development" },
        { name: "Design" },
        { name: "Business" },
        { name: "Personal Development" },
        { name: "IT and Software" },
        { name: "Health and Fitness" },
        { name: "Photography and Video" },
        { name: "Music" },
        { name: "Language Learning" },
        { name: "Teaching and Academics" },
        { name: "Art and Crafts" },
        { name: "Lifestyle" },
      ],
    });
    console.log("success");
  } catch (error) {
    console.log("database seeding error", error);
  } finally {
    console.log("database seeding done");
    database.$disconnect();
  }
}
main();
