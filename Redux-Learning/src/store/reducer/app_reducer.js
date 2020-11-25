const INITIAL_STATE ={
     apps : [
        {
            app_name : "chat App",
        }
     ],
}

export default (state = INITIAL_STATE  , action ) => {
    // console.log("app reducer => " , action.type)
    switch(action.type){
        case "SETDATA" :
            return ({
                ...state,
                apps : [ ...state.apps , action.app],
            })
    }
    return state ; 
}