/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("caterers").del();
  await knex("caterers").insert([
    { id: 1, name: "Maria Papadopoulos", password: "hashedpassword1" }, // Greek
    { id: 2, name: "Ahmed Hassan", password: "hashedpassword2" }, // Egyptian
    { id: 3, name: "Rahim Uddin", password: "hashedpassword3" }, // Bangladeshi 🇧🇩
    { id: 4, name: "Giovanni Rossi", password: "hashedpassword4" }, // Italian
    { id: 5, name: "Somchai Thanom", password: "hashedpassword5" }, // Thai
    { id: 6, name: "Claude Dupont", password: "hashedpassword6" }, // French
    { id: 7, name: "Ali Nawaz", password: "hashedpassword7" }, // Pakistani 🇵🇰
    { id: 8, name: "Rahul Sharma", password: "hashedpassword8" }, // Indian
    { id: 9, name: "Jisoo Kim", password: "hashedpassword9" }, // Korean
    { id: 10, name: "Carlos Hernandez", password: "hashedpassword10" }, // Mexican
    { id: 11, name: "Henry Thompson", password: "hashedpassword11" }, // British
    { id: 12, name: "Jamal Brown", password: "hashedpassword12" }, // Jamaican 🇯🇲
  ]);
}
