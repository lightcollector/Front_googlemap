import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

// tests
import { addMarker } from './redux/actions'


//store.subscribe(() => console.log(store.getState()));
//console.log(store.getState());

store.dispatch(addMarker( {lat: 44.0, lng: 22.0} ));

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
