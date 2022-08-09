import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import store from './store/store'
import { createBrowserHistory }  from 'history'
import {createRoot} from 'react-dom/client'
import "src/scss/grapesjs.css"
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);
const history = createBrowserHistory();

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);
root.render(
  
  <Provider store={store}>
    <App history={history}/>
  </Provider>

)
reportWebVitals()
