const INITIAL_STATE = {
    list: [],
    movie:{},
    search:""
  };
  
  export function MoviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_Movies_LIST":
        return {
          ...state,
          list: action.payload,
        };
      case "GET_Movie":
        return {
          ...state,
          movie: action.payload,
        };
      case "UPDATE_SEARCH":
        return {
          ...state,
          search: action.payload,
        };
      default:
        return state;
    }
  }