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
      icon_url: "greek.jpg", //Placeholder
    },
    {
      id: 2,
      type: "Egyptian",
      name: "Egyptian Cuisine",
      description: "Traditional Egyptian meals",
      caterer_id: 2,
      icon_url: "egyptian.jpg", //Placeholder
    },
    {
      id: 3,
      type: "Bangladeshi",
      name: "Bangladeshi Cuisine",
      description: "Spiced and flavorful Bengali dishes",
      caterer_id: 3,
      icon_url: "bangladeshi.jpg", //Placeholder
    },
    {
      id: 4,
      type: "Italian",
      name: "Italian Cuisine",
      description: "Famous pasta, pizzas, and more",
      caterer_id: 4,
      icon_url: "italian.jpg", //Placeholder
    },
    {
      id: 5,
      type: "Thai",
      name: "Thai Cuisine",
      description: "Spicy and aromatic Thai flavors",
      caterer_id: 5,
      icon_url: "thai.jpg", //Placeholder
    },
    {
      id: 6,
      type: "French",
      name: "French Cuisine",
      description: "Classic European fine dining",
      caterer_id: 6,
      icon_url: "french.jpg", //Placeholder
    },
    {
      id: 7,
      type: "Pakistani",
      name: "Pakistani Cuisine",
      description: "Rich flavors of Pakistani dishes",
      caterer_id: 7,
      icon_url: "pakistani.jpg", //Placeholder
    },
    {
      id: 8,
      type: "Indian",
      name: "Indian Cuisine",
      description: "Spicy and diverse Indian flavors",
      caterer_id: 8,
      icon_url: "indian.jpg", //Placeholder
    },
    {
      id: 9,
      type: "Korean",
      name: "Korean Cuisine",
      description: "Korean BBQ, kimchi, and more",
      caterer_id: 9,
      icon_url: "korean.jpg", //Placeholder
    },
    {
      id: 10,
      type: "Mexican",
      name: "Mexican Cuisine",
      description: "Tacos, enchiladas, and spicy flavors",
      caterer_id: 10,
      icon_url: "mexican.jpg", //Placeholder
    },
    {
      id: 11,
      type: "British",
      name: "British Cuisine",
      description: "Comfort food classics from the UK",
      caterer_id: 11,
      icon_url: "british.jpg", //Placeholder
    },
    {
      id: 12,
      type: "Jamaican",
      name: "Jamaican Cuisine",
      description: "Caribbean spice and jerk flavors",
      caterer_id: 12,
      icon_url: "jamaican.jpg", //Placeholder
    },
  ]);
}
