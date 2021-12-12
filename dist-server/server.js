"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearchedMovieFromApi = exports.getMoviesFromApi = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _regeneratorRuntime = require("regenerator-runtime");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiUrl = "http://www.omdbapi.com/?apikey=f5cbfeaa";

const server = _app.default.listen("3003", () => {
  console.log("Server Running on Port 3003...");
});

const moviesArray = ["Spider-Man", "Red Notice", "Shang-Chi and the Legend of the Ten Rings", "Ghostbusters: Afterlife", "Black Widow", "venom", "lost in space", "No Time to Die", "chucky", "Shazam"];

const createGuid = () => {
  function _p8(s) {
    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
  }

  return _p8() + _p8(true) + _p8(true) + _p8();
};

const getMoviesFromApi = async () => {
  const moviesData = [];

  for (let i = 0; i <= moviesArray.length - 1; i++) {
    try {
      const movieFromApi = await _axios.default.get(apiUrl + `&t=${moviesArray[i]}`);
      var guid = createGuid();
      movieFromApi.data.id = guid;
      moviesData.push(movieFromApi.data);
    } catch (err) {
      console.log(err);
    }
  }

  return moviesData;
};

exports.getMoviesFromApi = getMoviesFromApi;

const getSearchedMovieFromApi = async searchReq => {
  //   let moviesData = {};
  try {
    const movieFromApi = await _axios.default.get(apiUrl + `&t=${searchReq}`);
    var guid = createGuid();
    movieFromApi.data.id = guid; // moviesData.push(movieFromApi.data);

    return movieFromApi;
  } catch (err) {
    console.log(err);
  }
};

exports.getSearchedMovieFromApi = getSearchedMovieFromApi;