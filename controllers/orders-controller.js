import knex from "../db.js";

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

const getAllOrders = async (req, res) => {
  try {
    const orders = await knex("orders").select("*"); // Fetch all orders
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving orders", error });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await knex("orders").where({ id }).first();

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const meals = await knex("order_items")
      .where("order_id", id)
      .join("meals", "order_items.meal_id", "meals.id")
      .select("meals.id", "meals.name", "order_items.quantity");

    res.status(200).json({ ...order, meals });
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error });
  }
};

export { placeOrder, getAllOrders, getOrderById };
