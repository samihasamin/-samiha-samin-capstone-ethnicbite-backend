/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("cuisines").del();
  await knex("cuisines").insert([
    {
      id: 1,
      type: "Greek",
      name: "Greek Cuisine",
      description: "Authentic Mediterranean dishes",
      caterer_id: 1,
    },
    {
      id: 2,
      type: "Egyptian",
      name: "Egyptian Cuisine",
      description: "Traditional Egyptian meals",
      caterer_id: 2,
    },
    {
      id: 3,
      type: "Bangladeshi",
      name: "Bangladeshi Cuisine",
      description: "Spiced and flavorful Bengali dishes",
      caterer_id: 3,
    },
    {
      id: 4,
      type: "Italian",
      name: "Italian Cuisine",
      description: "Famous pasta, pizzas, and more",
      caterer_id: 4,
    },
    {
      id: 5,
      type: "Thai",
      name: "Thai Cuisine",
      description: "Spicy and aromatic Thai flavors",
      caterer_id: 5,
    },
    {
      id: 6,
      type: "French",
      name: "French Cuisine",
      description: "Classic European fine dining",
      caterer_id: 6,
    },
    {
      id: 7,
      type: "Pakistani",
      name: "Pakistani Cuisine",
      description: "Rich flavors of Pakistani dishes",
      caterer_id: 7,
    },
    {
      id: 8,
      type: "Indian",
      name: "Indian Cuisine",
      description: "Spicy and diverse Indian flavors",
      caterer_id: 8,
    },
    {
      id: 9,
      type: "Korean",
      name: "Korean Cuisine",
      description: "Korean BBQ, kimchi, and more",
      caterer_id: 9,
    },
    {
      id: 10,
      type: "Mexican",
      name: "Mexican Cuisine",
      description: "Tacos, enchiladas, and spicy flavors",
      caterer_id: 10,
    },
    {
      id: 11,
      type: "British",
      name: "British Cuisine",
      description: "Comfort food classics from the UK",
      caterer_id: 11,
    },
    {
      id: 12,
      type: "Jamaican",
      name: "Jamaican Cuisine",
      description: "Caribbean spice and jerk flavors",
      caterer_id: 12,
    },
  ]);
}
