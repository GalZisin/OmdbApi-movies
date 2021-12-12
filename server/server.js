import axios from "axios";
import { async } from "regenerator-runtime";
import app from "./app";

const apiUrl = "http://www.omdbapi.com/?apikey=f5cbfeaa";

const server = app.listen("3003", () => {
  console.log("Server Running on Port 3003...");
});

const moviesArray = [
  "Spider-Man",
  "Red Notice",
  "Shang-Chi and the Legend of the Ten Rings",
  "Ghostbusters: Afterlife",
  "Black Widow",
  "venom",
  "lost in space",
  "No Time to Die",
  "chucky",
  "Shazam",
];

const createGuid = () => {
  function _p8(s) {
    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
  }
  return _p8() + _p8(true) + _p8(true) + _p8();
};

export const getMoviesFromApi = async () => {
  const moviesData = [];
  for (let i = 0; i <= moviesArray.length - 1; i++) {
    try {
      const movieFromApi = await axios.get(apiUrl + `&t=${moviesArray[i]}`);
      var guid = createGuid();
      movieFromApi.data.id = guid;
      moviesData.push(movieFromApi.data);
    } catch (err) {
      console.log(err);
    }
  }
  return moviesData;
};

export const getSearchedMovieFromApi = async (searchReq) => {
  //   let moviesData = {};
  try {
    const movieFromApi = await axios.get(apiUrl + `&t=${searchReq}`);
    var guid = createGuid();
    movieFromApi.data.id = guid;
    return movieFromApi;
  } catch (err) {
    console.log(err);
  }
};
