import { bindActionCreators } from "redux"

const INITIALSTATE = {
    authenticated : false ,
    user : null,
}


export default (state = INITIALSTATE, action) =>{
    
    switch (action.type) {
        case "SET_AUTH":
            return({ 
                ...state,
                authenticated : !state.authenticated,
            })
        case "SET_USER":
            return({
                ...state,
                user:[action.user],
            })
        default:
            return state
    }

}