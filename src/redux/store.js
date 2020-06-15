// func to load a store
import { createStore } from 'redux';
// load reducers (already combined)
import rootReducer from './reducers.js';


// we build the store (and enable chrome devtools)
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;