import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
//import * as serviceWorker from './serviceWorker';

import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)