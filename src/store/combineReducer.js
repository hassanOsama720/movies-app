import { combineReducers } from "redux";
import {favReducer } from "./favReducer";
import { MoviesReducer } from "./MoviesReducer";


export default combineReducers({
  favReducer: favReducer,
  MoviesReducer: MoviesReducer
});
