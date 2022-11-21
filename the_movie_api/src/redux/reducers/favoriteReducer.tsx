let defaultState = {
    selectedItems: { movies: [], restaurantName: "" },
  };
  
  let favoriteReducer = (state = defaultState, action:any) => {
    switch (action.type) {
      case "ADD_TO_FAVORITE": {
        let newState = { ...state };
  
        if (action.payload.checkboxValue) {
          console.log("ADD TO FAVORITE");
  
          newState.selectedItems = {
            movies: [...newState.selectedItems.movies, action.payload],
            restaurantName: action.payload.restaurantName,
          };
        } else {
          console.log("REMOVE FROM FAVORITE");
          newState.selectedItems = {
            movies: [
              ...newState.selectedItems.movies.filter(
                (movies:any) => movies.title !== action.payload.title
              ),
            ],
            restaurantName: action.payload.restaurantName,
          };
        }
        console.log(newState, "👉");
        return newState;
      }
  
      default:
        return state;
    }
  };
  
  export default favoriteReducer;