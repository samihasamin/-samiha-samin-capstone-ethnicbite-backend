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
      name: "Greek",
      description: "Authentic Mediterranean dishes",
      caterer_id: 1,
      icon_url: "greek-cuisine.svg",
    },
    {
      id: 2,
      type: "Egyptian",
      name: "Egyptian",
      description: "Traditional Egyptian meals",
      caterer_id: 2,
      icon_url: "egyptian-cuisine.svg",
    },
    {
      id: 3,
      type: "Bangladeshi",
      name: "Bangladeshi",
      description: "Spiced and flavorful Bengali dishes",
      caterer_id: 3,
      icon_url: "bangladeshi-cuisine.svg",
    },
    {
      id: 4,
      type: "Italian",
      name: "Italian",
      description: "Famous pasta, pizzas, and more",
      caterer_id: 4,
      icon_url: "italian-cuisine.svg",
    },
    {
      id: 5,
      type: "Thai",
      name: "Thai",
      description: "Spicy and aromatic Thai flavors",
      caterer_id: 5,
      icon_url: "thai-cuisine.svg",
    },
    {
      id: 6,
      type: "French",
      name: "French",
      description: "Classic European fine dining",
      caterer_id: 6,
      icon_url: "french-cuisine.svg",
    },
    {
      id: 7,
      type: "Pakistani",
      name: "Pakistani",
      description: "Rich flavors of Pakistani dishes",
      caterer_id: 7,
      icon_url: "pakistani-cuisine.svg",
    },
    {
      id: 8,
      type: "Indian",
      name: "Indian",
      description: "Spicy and diverse Indian flavors",
      caterer_id: 8,
      icon_url: "indian-cuisine.svg",
    },
    {
      id: 9,
      type: "Korean",
      name: "Korean",
      description: "Korean BBQ, kimchi, and more",
      caterer_id: 9,
      icon_url: "korean-cuisine.svg",
    },
    {
      id: 10,
      type: "Mexican",
      name: "Mexican",
      description: "Tacos, enchiladas, and spicy flavors",
      caterer_id: 10,
      icon_url: "mexican-cuisine.svg",
    },
    {
      id: 11,
      type: "British",
      name: "British",
      description: "Comfort food classics from the UK",
      caterer_id: 11,
      icon_url: "british-cuisine.svg",
    },
    {
      id: 12,
      type: "Jamaican",
      name: "Jamaican",
      description: "Caribbean spice and jerk flavors",
      caterer_id: 12,
      icon_url: "jamaican-cuisine.svg",
    },
  ]);
}
