"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovie = getMovie;
exports.getMovies = getMovies;

var _server = require("../server");

async function getMovies(req, res) {
  try {
    const moviesData = await (0, _server.getMoviesFromApi)();
    const data = JSON.stringify(moviesData);
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    res.status(400).json();
  }
}

async function getMovie(req, res) {
  try {
    console.log("req", req.params.title);
    const moviesData = await (0, _server.getSearchedMovieFromApi)(req.params.title);
    console.log("moviesData:", moviesData.data);
    const data = JSON.stringify(moviesData.data);
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    res.status(400).json();
  }
}