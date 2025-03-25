import knex from "../db.js";

const createReview = async (req, res) => {
  const { caterer_id, meal_seeker_name, rating, review } = req.body;

  try {
    await knex("reviews").insert({
      caterer_id,
      meal_seeker_name,
      rating,
      review,
      created_at: new Date(),
    });

    res.status(201).json({ message: "Review submitted successfully" });
  } catch (error) {
    console.error("Error inserting review:", error);
    res.status(500).json({ message: "Error submitting review", error });
  }
};

export { createReview };
