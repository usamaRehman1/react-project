import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import TodoReducer from './todoReducer';

const AllReducer = combineReducers({
    auth : AuthReducer, 
    todo : TodoReducer,
})

export default AllReducer;