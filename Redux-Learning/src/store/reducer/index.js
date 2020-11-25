import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import AppReducer from './app_reducer';

const allReducer = combineReducers({
    users : AuthReducer,
    apps : AppReducer,
})

export default allReducer ;
