import express from "express";
import cors from "cors";
import gamesRoutes from "./routes/gamesRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/games", gamesRoutes);

app.use(errorHandler);

export default app;
