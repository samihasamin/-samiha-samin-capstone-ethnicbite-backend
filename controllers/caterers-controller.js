import knex from "../db.js";

const getAllCaterers = async (req, res) => {
  try {
    let query = knex("caterers")
      .select(
        "caterers.id",
        "caterers.name",
        "cuisines.type as cuisine",
        "profile_picture.photo_url"
      )
      .join("cuisines", "caterers.id", "cuisines.caterer_id")
      .leftJoin("profile_picture", "caterers.id", "profile_picture.caterer_id");

    if (req.query.cuisine) {
      query = query.where("cuisines.type", req.query.cuisine);
    }

    const caterers = await query;
    res.status(200).json(caterers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching caterers", error });
  }
};

const getCatererById = async (req, res) => {
  try {
    const { id } = req.params;
    const caterer = await knex("caterers")
      .where("caterers.id", id)
      .select("caterers.id", "caterers.name", "caterers.cuisine")
      .first();

    if (!caterer) {
      return res.status(404).json({ message: "Caterer not found" });
    }

    const meals = await knex("meals")
      .where("caterer_id", id)
      .select("id", "name", "description", "price", "image_url");

    const reviews = await knex("reviews")
      .leftJoin("meal_seekers", "reviews.meal_seeker_id", "meal_seekers.id")
      .where("reviews.caterer_id", id)
      .select(
        knex.raw(
          "COALESCE(reviews.meal_seeker_name, meal_seekers.name, 'Anonymous') as meal_seeker_name"
        ),
        "reviews.rating",
        "reviews.review",
        "reviews.created_at"
      );

    console.log("Fetched Reviews:", reviews);

    const aboutMe = await knex("about_me")
      .where("caterer_id", id)
      .select("bio")
      .first();

    const profilePicture = await knex("profile_picture")
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
    console.error("Error fetching caterer details:", error);
    res.status(500).json({ message: "Error fetching caterer details", error });
  }
};

const getCaterersByCuisine = async (req, res) => {
  const { type } = req.params;
  try {
    const caterers = await knex("caterers")
      .select(
        "caterers.id",
        "caterers.name",
        "cuisines.type as cuisine",
        "profile_picture.photo_url"
      )
      .join("cuisines", "caterers.id", "cuisines.caterer_id")
      .leftJoin("profile_picture", "caterers.id", "profile_picture.caterer_id")
      .where("cuisines.type", type);

    res.status(200).json(caterers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching caterers", error });
  }
};
export { getAllCaterers, getCatererById, getCaterersByCuisine };
