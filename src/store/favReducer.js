const INITIAL_STATE = {
    movies: [],
    favNumber:0
  };
  
  export function favReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "DELETE_MOVIE":
          for (let index = 0; index < state.movies.length; index++) {
              if(state.movies[index].id === action.payload.id){
                  state.movies.splice(index,1);
                  state.favNumber = state.favNumber - 1;
              }
          }
        return {
          ...state,
        };
      case "ADD_MOVIE":
          state.movies.push(action.payload);
          state.favNumber = state.favNumber + 1;
        return {
          ...state
        };
      default:
        return state;
    }
  }