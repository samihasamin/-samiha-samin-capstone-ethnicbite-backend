import express from "express";
import cors from "cors";
import caterersRoutes from "./routes/caterers-routes.js";
import ordersRoutes from "./routes/orders-routes.js";
import cuisineRoutes from "./routes/cuisine-routes.js";
import mealsRoutes from "./routes/meals-routes.js";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(cors());

app.use(express.json());

app.use("/api/caterers", caterersRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/cuisines", cuisineRoutes);
app.use("/api/meals", mealsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
