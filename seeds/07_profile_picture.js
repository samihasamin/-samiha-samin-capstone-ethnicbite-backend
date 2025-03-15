/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("profile_photos").del();
  await knex("profile_photos").insert([
    { caterer_id: 1, photo_url: "/assets/images/maria-papadopoulos-greek.jpg" },
    { caterer_id: 2, photo_url: "/assets/images/ahmed-hassan-egyptian.jpg" },
    { caterer_id: 3, photo_url: "/assets/images/rahim-uddin-bangladeshi.jpg" },
    { caterer_id: 4, photo_url: "/assets/images/giovanni-rossi-italian.jpg" },
    { caterer_id: 5, photo_url: "/assets/images/somchai-thanom-thai.JPG" },
    { caterer_id: 6, photo_url: "/assets/images/claude-dupont-french.jpg" },
    { caterer_id: 7, photo_url: "/assets/images/ali-nawaz-pakistani.jpg" },
    { caterer_id: 8, photo_url: "/assets/images/rahul-sharma-indian.jpg" },
    { caterer_id: 9, photo_url: "/assets/images/jisoo-kim-korean.jpg" },
    {
      caterer_id: 10,
      photo_url: "/assets/images/carlos-hernandez-mexican.jpg",
    },
    {
      caterer_id: 11,
      photo_url: "/assets/images/henry-thompson-british.jpg",
    },
    {
      caterer_id: 12,
      photo_url: "/assets/images/jamal-brown-jamaican.JPG",
    },
  ]);
}
