import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'


store.subscribe(() => console.log(store.getState()));
console.log(store.getState());



const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)