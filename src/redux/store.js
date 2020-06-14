// func to load a store
import { createStore } from 'redux';
// load reducers (already combined)
import rootReducer from './reducers.js';

// we build the store
const store = createStore(rootReducer);
export default store;