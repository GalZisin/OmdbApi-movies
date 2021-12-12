import Router from "express";
import { getMovies, getMovie } from "../controllers/moviesController";

const router = Router();

router.route("/").post(getMovies);
router.route("/movie/:title").get(getMovie);
export default router;
