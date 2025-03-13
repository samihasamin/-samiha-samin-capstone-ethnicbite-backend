/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("cuisines").del();
  await knex("cuisines").insert([
    {
      type: "Greek",
      name: "Moussaka",
      description: "A Greek layered eggplant and meat dish",
      caterer_id: 1,
    },
    {
      type: "Egyptian",
      name: "Koshari",
      description: "A delicious mix of pasta, rice, lentils, and chickpeas",
      caterer_id: 2,
    },
    {
      type: "Indian",
      name: "Biryani",
      description: "Spiced rice with meat or vegetables",
      caterer_id: 3,
    },
    {
      type: "Italian",
      name: "Lasagna",
      description: "Layered pasta with meat and cheese",
      caterer_id: 4,
    },
    {
      type: "Chinese",
      name: "Peking Duck",
      description: "Crispy roasted duck served with pancakes",
      caterer_id: 5,
    },
    {
      type: "Japanese",
      name: "Sushi",
      description: "Vinegared rice with raw fish or vegetables",
      caterer_id: 6,
    },
    {
      type: "Mexican",
      name: "Tacos",
      description: "Corn tortillas filled with meat and vegetables",
      caterer_id: 7,
    },
    {
      type: "Lebanese",
      name: "Shawarma",
      description: "Marinated meat wrapped in pita bread",
      caterer_id: 8,
    },
    {
      type: "Turkish",
      name: "Kebabs",
      description: "Grilled meat on skewers",
      caterer_id: 9,
    },
    {
      type: "Thai",
      name: "Pad Thai",
      description: "Stir-fried rice noodles with shrimp and peanuts",
      caterer_id: 10,
    },
    {
      type: "Korean",
      name: "Bibimbap",
      description: "Rice bowl with mixed vegetables and meat",
      caterer_id: 11,
    },
    {
      type: "French",
      name: "Coq au Vin",
      description: "Chicken braised in red wine",
      caterer_id: 12,
    },
    {
      type: "Moroccan",
      name: "Tagine",
      description: "Slow-cooked stew with meat and vegetables",
      caterer_id: 13,
    },
    {
      type: "Brazilian",
      name: "Feijoada",
      description: "Black bean stew with pork and beef",
      caterer_id: 14,
    },
    {
      type: "Nigerian",
      name: "Jollof Rice",
      description: "Spiced rice with tomatoes and meat",
      caterer_id: 15,
    },
    {
      type: "Ethiopian",
      name: "Doro Wat",
      description: "Spicy chicken stew with injera bread",
      caterer_id: 16,
    },
    {
      type: "Russian",
      name: "Borscht",
      description: "Beet soup with sour cream",
      caterer_id: 17,
    },
    {
      type: "Filipino",
      name: "Adobo",
      description: "Marinated meat stewed in vinegar and soy sauce",
      caterer_id: 18,
    },
    {
      type: "Argentinian",
      name: "Asado",
      description: "Grilled beef barbecue",
      caterer_id: 19,
    },
    {
      type: "Indonesian",
      name: "Nasi Goreng",
      description: "Fried rice with egg and shrimp",
      caterer_id: 20,
    },
  ]);
}
