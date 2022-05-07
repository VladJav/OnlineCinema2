import {combineReducers, createStore} from "redux";
import genresReducer from "./reducers/genresReducer";
import moviesReducer from "./reducers/moviesReducer";
const rootReducer = combineReducers({
    genres: genresReducer,
    movies: moviesReducer
})
const store = createStore(rootReducer);
export default store;