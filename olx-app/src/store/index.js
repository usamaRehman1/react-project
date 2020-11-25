// import React from 'react';
import reducers from './reducer';
import { createStore  , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducers , applyMiddleware(thunk)) ;

export default store;