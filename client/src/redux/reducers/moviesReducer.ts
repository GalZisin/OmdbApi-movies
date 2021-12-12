import {
    MOVIES_REQUEST,
    MOVIES_SUCCESS,
    MOVIES_FAIL,
    MOVIE_REQUEST,
    MOVIE_SUCCESS,
    MOVIE_FAIL,
    CLEAR_ERRORS,
} from "../constants/moviesConstants";
import { IAction, IState } from "../../types/types";

export const moviesReducer = (state: IState = { movies: [] }, action: IAction) => {
    switch (action.type) {
        case MOVIES_REQUEST:
            return {
                loading: true,
                movies: [],
            };
        case MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
            };
        case MOVIES_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: undefined,
            };
        default:
            return state;
    }
};


export const movieReducer = (state: IState = { movie: {} }, action: IAction) => {
    switch (action.type) {
        case MOVIE_REQUEST:
            return {
                loading: true,
            };
        case MOVIE_SUCCESS:
            return {
                loading: false,
                movie: action.payload,
            };
        case MOVIE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: undefined,
            };
        default:
            return state;
    }
};
