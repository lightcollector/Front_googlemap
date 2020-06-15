import { combineReducers } from 'redux';

const initialState = [
  { id: 1, lat: 41.393039, lng: 2.173848 },
  { id: 2, lat: 41.393385, lng: 2.181907 },
]

// reducer to update the marker list (state) of the Store.
const markersReducer = (state = initialState, action) => {
    if (action.type === 'ADD_MARKER') {
        return [
            ...state,
            {
                lat: action.lat,
                lng: action.lng
            }
        ]
      } else {
        return state;
      }
  }


const rootReducer = combineReducers({ markers:markersReducer })  

export default rootReducer