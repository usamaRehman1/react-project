import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import SellCardReducer from './sellCard_reducer';

const allReducer = combineReducers({
    users : AuthReducer , 
    sellCard : SellCardReducer,

})

export default allReducer;