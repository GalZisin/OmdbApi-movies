import express, { json } from "express";
import movies from "./routes/movies";
import cors from "cors";
const app = express();
app.use(json());
app.use(cors());
app.use("/", movies);

export default app;
