import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import resetRoutes from "./routes/reset.routes";
import todoRoutes from "./routes/todo.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/reset", resetRoutes);
app.use("/api/todos", todoRoutes);

app.use(errorHandler);

export default app;
