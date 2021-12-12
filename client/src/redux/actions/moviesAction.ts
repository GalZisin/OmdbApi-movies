import axios from "axios";
import { AppDispatch, IMovie } from "../../types/types";
import {
    MOVIES_REQUEST,
    MOVIES_SUCCESS,
    MOVIES_FAIL,
    MOVIE_REQUEST,
    MOVIE_SUCCESS,
    MOVIE_FAIL
} from "../constants/moviesConstants";

const baseUrl = "http://localhost:3003";

export const getMovies = () => async (dispatch: AppDispatch) => {
    try {
        let moviesDataApi: any;
        dispatch({ type: MOVIES_REQUEST });

        moviesDataApi = await axios.post(baseUrl + `/`);
        moviesDataApi = JSON.parse(moviesDataApi.data.data)
        console.log("data", moviesDataApi)
        dispatch({
            type: MOVIES_SUCCESS,
            payload: moviesDataApi,
        })
    } catch (error: any) {
        dispatch({
            type: MOVIES_FAIL,
            payload: error.response.data.message
        })
    }
}
