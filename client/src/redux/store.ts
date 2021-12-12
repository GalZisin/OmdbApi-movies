import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer, movieReducer } from "./reducers/moviesReducer";
import { modalReducer } from "./reducers/modalReducer";

const reducer = combineReducers({
    movies: moviesReducer,
    movie: movieReducer,
    modal: modalReducer
});

let initialState = {};
const middlware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlware))
);

export type RootState = ReturnType<typeof store.getState>

export default store;