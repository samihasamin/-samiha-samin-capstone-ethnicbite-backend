import knex from "../knex.js";

const placeOrder = async (req, res) => {
  const { meal_seeker_id, caterer_id, meals, total_price } = req.body;

  try {
    const [orderId] = await knex("orders").insert({
      meal_seeker_id,
      caterer_id,
      total_price,
    });

    for (const meal of meals) {
      await knex("order_items").insert({
        order_id: orderId,
        meal_id: meal.id,
        quantity: meal.quantity,
      });
    }

    res.status(201).json({ message: "Order placed successfully", orderId });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error });
  }
};

export { placeOrder };
