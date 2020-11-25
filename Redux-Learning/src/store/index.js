import React, { createElement } from 'react';
import AllReducers from './reducer';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(AllReducers , applyMiddleware(thunk));

export default store ;