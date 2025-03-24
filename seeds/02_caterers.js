/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("caterers").del();
  await knex("caterers").insert([
    {
      id: 1,
      name: "Maria Papadopoulos",
      password: "hashedpassword1",
      cuisine: "Greek",
    }, // Greek
    {
      id: 2,
      name: "Ahmed Hassan",
      password: "hashedpassword2",
      cuisine: "Egyptian",
    }, // Egyptian
    {
      id: 3,
      name: "Rahim Uddin",
      password: "hashedpassword3",
      cuisine: "Bangladeshi",
    }, // Bangladeshi 🇧🇩
    {
      id: 4,
      name: "Giovanni Rossi",
      password: "hashedpassword4",
      cuisine: "Italian",
    }, // Italian
    {
      id: 5,
      name: "Somchai Thanom",
      password: "hashedpassword5",
      cuisine: "Thai",
    }, // Thai
    {
      id: 6,
      name: "Claude Dupont",
      password: "hashedpassword6",
      cuisine: "French",
    }, // French
    {
      id: 7,
      name: "Ali Nawaz",
      password: "hashedpassword7",
      cuisine: "Pakistani",
    }, // Pakistani 🇵🇰
    {
      id: 8,
      name: "Rahul Sharma",
      password: "hashedpassword8",
      cuisine: "Indian",
    }, // Indian
    {
      id: 9,
      name: "Jisoo Kim",
      password: "hashedpassword9",
      cuisine: "Korean",
    }, // Korean
    {
      id: 10,
      name: "Carlos Hernandez",
      password: "hashedpassword10",
      cuisine: "Mexican",
    }, // Mexican
    {
      id: 11,
      name: "Henry Thompson",
      password: "hashedpassword11",
      cuisine: "British",
    }, // British
    {
      id: 12,
      name: "Jamal Brown",
      password: "hashedpassword12",
      cuisine: "Jamaican",
    }, // Jamaican 🇯🇲
  ]);
}
