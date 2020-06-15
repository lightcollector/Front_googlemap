// Action
export const ADD_MARKER = 'ADD_MARKER';

// Action creator
export const addMarker = (mrkerObj) => {
    return {
        type: ADD_MARKER,
        name: mrkerObj.name,
        lat: mrkerObj.lat,
        lng: mrkerObj.lng
      }    
}