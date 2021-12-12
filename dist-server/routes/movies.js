"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _moviesController = require("../controllers/moviesController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.default)();
router.route("/").post(_moviesController.getMovies);
router.route("/movie/:title").get(_moviesController.getMovie);
var _default = router;
exports.default = _default;