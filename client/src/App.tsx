import "./App.css";
import MoviesPage from "./components/moviesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">Movies</div>
      <Router>
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          {/* <Route
            path="/picture-discussion/:id"
            element={<PictureDiscussion />}
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
