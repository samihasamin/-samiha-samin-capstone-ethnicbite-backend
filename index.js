import express from "express";
import cors from "cors";
import caterersRoutes from "./routes/caterers-routes.js";
import ordersRoutes from "./routes/orders-routes.js";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(cors());

app.use(express.json());

app.use("/api/caterers", caterersRoutes);
app.use("/api/order", ordersRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
