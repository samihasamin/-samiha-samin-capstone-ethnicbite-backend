/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("caterers").del();
  await knex("caterers").insert([
    { name: "Maria Papadopoulos", password: "hashedpassword1" },
    { name: "Ahmed Hassan", password: "hashedpassword2" },
    { name: "Elena Rodriguez", password: "hashedpassword3" },
    { name: "Hassan Malik", password: "hashedpassword4" },
    { name: "Fatima Al-Farsi", password: "hashedpassword5" },
    { name: "Yuki Tanaka", password: "hashedpassword6" },
    { name: "Giovanni Rossi", password: "hashedpassword7" },
    { name: "Aisha Omar", password: "hashedpassword8" },
    { name: "Rahul Sharma", password: "hashedpassword9" },
    { name: "Chen Wei", password: "hashedpassword10" },
    { name: "Tatiana Ivanova", password: "hashedpassword11" },
    { name: "Samuel Mensah", password: "hashedpassword12" },
    { name: "Karim Abdallah", password: "hashedpassword13" },
    { name: "Victoria Silva", password: "hashedpassword14" },
    { name: "Emmanuel Osei", password: "hashedpassword15" },
    { name: "Mei Lin", password: "hashedpassword16" },
    { name: "Yusuf Demir", password: "hashedpassword17" },
    { name: "Hanna Kowalski", password: "hashedpassword18" },
    { name: "Santiago Lopez", password: "hashedpassword19" },
    { name: "Nguyen Minh", password: "hashedpassword20" },
  ]);
}
