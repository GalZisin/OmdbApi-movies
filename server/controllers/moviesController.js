import { getMoviesFromApi, getSearchedMovieFromApi } from "../server";

export async function getMovies(req, res) {
  try {
    const moviesData = await getMoviesFromApi();
    const data = JSON.stringify(moviesData);
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(400).json();
  }
}

export async function getMovie(req, res) {
  try {
    console.log("req", req.params.title);
    const moviesData = await getSearchedMovieFromApi(req.params.title);
    console.log("moviesData:", moviesData.data);
    const data = JSON.stringify(moviesData.data);
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(400).json();
  }
}
