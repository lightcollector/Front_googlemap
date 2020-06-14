

// Action
export const ADD_MARKER = 'ADD_MARKER';

// Action creator
export const addMarker = (mrkerObj) => {
    return {
        type: ADD_MARKER,
        id: mrkerObj.id,
        lat: mrkerObj.lat,
        lng: mrkerObj.lng
      }    
}