
import axios from "axios";
export const getMoviesList = (page,lang) => (dispatch) => {
  return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d1f06f746c82eac24bc1f93a2ca831e0&page=${page}&language=${lang}`)
    .then((res) =>
      dispatch({
        type: "GET_Movies_LIST",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};
export const getMovie = (id,lang) => (dispatch) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}popular?api_key=d1f06f746c82eac24bc1f93a2ca831e0&language=${lang}`)
    .then((res) =>
      dispatch({
        type: "GET_Movie",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
export const getSearch = (word,page,lang) => (dispatch) => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d1f06f746c82eac24bc1f93a2ca831e0&page=${page}&query=${word}&language=${lang}`)
    .then((res) =>
      dispatch({
        type: "GET_Movies_LIST",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const updateSearch = (payload) => {
  return {
    type: "UPDATE_SEARCH",
    payload,
  };
};