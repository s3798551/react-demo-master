import React from 'react';
import ReactDOM from 'react-dom';


// 第三方工具
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// redux 
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

import routes from './routes'
import { BrowserRouter as Router, BrowserRouter, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import FlashMassagesList from './components/flash/FlashMessagesList'
import setAuthToken from './utils/setAuthToken'

import { setCurrentUser } from './actions/LoginAction'
import Decode from 'jwt-decode'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
if(localStorage.jwToken){
    setAuthToken(localStorage.jwToken);
    store.dispatch(setCurrentUser(Decode(localStorage.jwToken)))
}



ReactDOM.render(
    <Provider store = { store }>
        <Router routes = { routes }>
            <NavBar/>
            <FlashMassagesList />
            { routes  }
        </Router>
    </Provider>
    ,
  document.getElementById('root')
);

