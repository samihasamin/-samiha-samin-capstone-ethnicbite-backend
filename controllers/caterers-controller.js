import knex from "../knex.js";

const getAllCaterers = async (req, res) => {
  try {
    let query = knex("caterers")
      .select("caterers.id", "caterers.name", "cuisines.type as cuisine")
      .join("cuisines", "caterers.id", "cuisines.caterer_id");

    if (req.query.cuisine) {
      query = query.where("cuisine.type", req.query.cuisine);
    }

    const caterers = await query;
    res.status(200).json(caterers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching caterers", error });
  }
};

const getCatererById = async (req, res) => {
  try {
    const caterer = await knex("caterers")
      .where("caterers.id", id)
      .select("caterers.id", "caterers.name")
      .first();

    if (!caterer) {
      return res.status(404).json({ message: "Caterer not found" });
    }

    const meals = await knex("meals")
      .where("caterer_id", id)
      .select("name", "description", "price", "image_url");

    const reviews = await knex("reviews")
      .where("caterer_id", id)
      .select("meal_seeker_id", "rating", "review", "created_at");

    const aboutMe = await knex("about_me")
      .where("caterer_id", id)
      .select("description")
      .first();

    const profilePicture = await knex("profile_photos")
      .where("caterer_id", id)
      .select("photo_url")
      .first();

    res.status(200).json({
      ...caterer,
      aboutMe,
      profilePicture,
      meals,
      reviews,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching caterer details", error });
  }
};

export { getAllCaterers, getCatererById };
