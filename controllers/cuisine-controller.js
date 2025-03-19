import knex from "../db.js";

const getAllCuisines = async (req, res) => {
  try {
    const cuisines = await knex("cuisines").select("*");
    res.json(cuisines);
  } catch (error) {
    console.error("Error fetching cuisines:", error);
    res.status(500).json({ error: "Failed to retrieve cuisines" });
  }
};

export { getAllCuisines };
