// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import reducers from './reducers.js';
// definimos el estado inicial
const initialState = {
    markers: [],
  };
// creamos el store
const store = createStore(reducers, initialState);
export default store;