import knex from "../db.js";

const getMeals = async (req, res) => {
  try {
    const meals = await knex("meals").select(
      "id",
      "name",
      "description",
      "image_url"
    );
    res.status(200).json(meals);
  } catch (error) {
    console.error("Error fetching meals:", error);
    res.status(500).json({ error: "Failed to fetch meals" });
  }
};

export { getMeals };
