/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("meal_seekers").del();
  await knex("meal_seekers").insert([
    { id: 1, name: "John Doe", password: "hashedpassword1" },
    { id: 2, name: "Jane Smith", password: "hashedpassword2" },
    { id: 3, name: "Ali Khan", password: "hashedpassword3" },
    { id: 4, name: "Emily Davis", password: "hashedpassword4" },
    { id: 5, name: "Omar Farooq", password: "hashedpassword5" },
    { id: 6, name: "Sophia Kim", password: "hashedpassword6" },
    { id: 7, name: "Liam Nguyen", password: "hashedpassword7" },
    { id: 8, name: "Emma Brown", password: "hashedpassword8" },
    { id: 9, name: "Noah Wilson", password: "hashedpassword9" },
    { id: 10, name: "Olivia Martinez", password: "hashedpassword10" },
    { id: 11, name: "Mason Patel", password: "hashedpassword11" },
    { id: 12, name: "Ava Carter", password: "hashedpassword12" },
    { id: 13, name: "Ethan Gonzalez", password: "hashedpassword13" },
    { id: 14, name: "Mia Robinson", password: "hashedpassword14" },
    { id: 15, name: "Lucas Hernandez", password: "hashedpassword15" },
    { id: 16, name: "Charlotte Lee", password: "hashedpassword16" },
    { id: 17, name: "Benjamin White", password: "hashedpassword17" },
    { id: 18, name: "Amelia Thompson", password: "hashedpassword18" },
    { id: 19, name: "Daniel Hall", password: "hashedpassword19" },
    { id: 20, name: "Isabella Young", password: "hashedpassword20" },
  ]);
}
