import { useEffect, useState } from "react";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { IMovie } from "../types/types";
import axios from "axios";
import Modal from '@mui/material/Modal';
import { RootState } from "../redux/store";
// import ModalMovie from "./modalMovie";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
    MOVIES_REQUEST,
    MOVIES_SUCCESS,
    MOVIES_FAIL,
    MOVIE_REQUEST,
    MOVIE_SUCCESS,
    MOVIE_FAIL
} from "../redux/constants/moviesConstants";
// import { getMovies } from '../redux/actions/moviesAction';
const baseUrl = "http://localhost:3003";

const MoviesPage = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [movie, setMovie] = useState<IMovie[]>([]);
    const [searchedMovie, setSearchedMovie] = useState([]);
    const [search, setSearch] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();

    const { movies, loading: loadingMovies } = useSelector((state: RootState) => state.movies);

    const { loading: loadingMovie } = useSelector((state: RootState) => state.movie);

    useEffect(() => {

        if (!search) {
            (async () => {
                let moviesDataApi: any;
                try {
                    dispatch({ type: MOVIES_REQUEST });
                    moviesDataApi = await axios.post(baseUrl + `/`);

                    moviesDataApi = JSON.parse(moviesDataApi.data.data)
                    console.log("data", moviesDataApi)

                    dispatch({
                        type: MOVIES_SUCCESS,
                        payload: moviesDataApi,
                    });
                    setAllMovies(moviesDataApi);
                }
                catch (error: any) {
                    dispatch({
                        type: MOVIES_FAIL,
                        payload: error?.response.data.message!,
                    });
                    console.log(error);
                    moviesDataApi = [];
                }
            })()
        }




        if (search) {
            (async () => {
                let searchedMovieDataFromApi: any;
                try {
                    dispatch({ type: MOVIES_REQUEST });
                    searchedMovieDataFromApi = await axios.get(baseUrl + `/movie/${searchedMovie}`);

                    searchedMovieDataFromApi = JSON.parse(searchedMovieDataFromApi.data.data);
                    console.log("data", searchedMovieDataFromApi);

                    const moviesArray: any = [];
                    moviesArray.push(searchedMovieDataFromApi);
                    setAllMovies(moviesArray);
                    dispatch({
                        type: MOVIES_SUCCESS,
                        payload: searchedMovieDataFromApi,
                    });


                }
                catch (error: any) {
                    dispatch({
                        type: MOVIES_FAIL,
                        payload: error?.response.data.message!,
                    });
                    console.log(error);
                    searchedMovieDataFromApi = [];
                }

            })()

        }

    }, [dispatch, search]);



    const searchMovie = (event: any) => {
        const movieTitle = event?.target?.value?.toLowerCase();
        if (movieTitle === "") {
            setSearch(!search);
        }
        setSearchedMovie(movieTitle);
    };


    const handleSearch = (e: any) => {
        setSearch(!search);
    }
    const handleOpen = (id: any) => {
        setOpen(true);
        console.log(allMovies)
        const movie: any = allMovies.filter((movie: any) => movie.id === id)

        console.log(movie)
        setMovie(movie);
    }



    const style: any = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,

        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 24,

    };
    return (
        <div>

            <div className="searchBox">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                    type="text"
                    onInput={searchMovie}
                    placeholder="What are you looking for?"
                />
                <button className="search-btn" onClick={handleSearch}>search</button>
            </div>
            <button className="search-btn-mobile" onClick={handleSearch}>search</button>
            {loadingMovies || loadingMovie ? (<h1>Loading...</h1>) : (
                <div className="cards-container">
                    {allMovies &&
                        allMovies.map((card: IMovie, index: number) => (
                            <div key={card.id} onClick={() => handleOpen(card.id)}>
                                <Card key={card.id} movieData={card} />
                            </div>


                        ))}
                </div>
            )}
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="modal-box">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Title: {movie[0]?.Title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <p> Year: {movie[0]?.Year}</p>
                            <p> Writer: {movie[0]?.Writer}</p>
                            <p> Rated: {movie[0]?.Rated}</p>
                            <p> Actors: {movie[0]?.Actors}</p>
                            <p> Description: {movie[0]?.Plot}</p>
                        </Typography>
                    </Box>
                </Modal>
            </>
        </div>

    )
}

export default MoviesPage;

