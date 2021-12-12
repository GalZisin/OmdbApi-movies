import store from "../redux/store";

export interface IMovie {
    id?: string | undefined;
    Title?: string;
    imdbRating?: string;
    Poster?: string;
    Plot?: string;
    Year?: string;
    Writer?: string;
    Rated?: string;
    Actors?: string;
}

export interface ICardProps {
    movieData: {
        Title?: string;
        imdbRating?: string;
        Poster?: string;
        Plot?: string;
        Year?: string;
        Writer?: string;
        Rated?: string;
        Actors?: string;
    }

}

export interface IState {
    loading?: boolean;
    error?: string | undefined;
    success?: boolean;
    movies?: IMovie[];
    movie?: IMovie;

}
export interface IAction {
    type?: string;
    payload?: any;
}
export type AppDispatch = typeof store.dispatch