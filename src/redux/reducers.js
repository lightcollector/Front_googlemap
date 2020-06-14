


// reducer to update the marker list (state) of the Store.
export const rootReducer = (state = [], action) => {
    if (action.type === 'ADD_MARKER') {
        return [
            ...state,
            {
                id: action.id,
                lat: action.lat,
                lng: action.lng
            }
        ]
      } else {
        return state;
      }
  }
  
  export default rootReducer