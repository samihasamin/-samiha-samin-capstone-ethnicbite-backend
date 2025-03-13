/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("meal_seekers").del();
  await knex("meal_seekers").insert([
    { name: "John Doe", password: "hashedpassword1" },
    { name: "Jane Smith", password: "hashedpassword2" },
    { name: "Ali Khan", password: "hashedpassword3" },
    { name: "Emily Davis", password: "hashedpassword4" },
    { name: "Omar Farooq", password: "hashedpassword5" },
    { name: "Sophia Kim", password: "hashedpassword6" },
    { name: "Liam Nguyen", password: "hashedpassword7" },
    { name: "Emma Brown", password: "hashedpassword8" },
    { name: "Noah Wilson", password: "hashedpassword9" },
    { name: "Olivia Martinez", password: "hashedpassword10" },
    { name: "Mason Patel", password: "hashedpassword11" },
    { name: "Ava Carter", password: "hashedpassword12" },
    { name: "Ethan Gonzalez", password: "hashedpassword13" },
    { name: "Mia Robinson", password: "hashedpassword14" },
    { name: "Lucas Hernandez", password: "hashedpassword15" },
    { name: "Charlotte Lee", password: "hashedpassword16" },
    { name: "Benjamin White", password: "hashedpassword17" },
    { name: "Amelia Thompson", password: "hashedpassword18" },
    { name: "Daniel Hall", password: "hashedpassword19" },
    { name: "Isabella Young", password: "hashedpassword20" },
  ]);
}
