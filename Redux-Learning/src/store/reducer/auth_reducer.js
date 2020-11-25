const INITIAL_STATE = {
    users : [
        {
            name : "usama",
            emial : "usama@gmail.com",
        },
        {
            name : "ismail",
            email : "ismail@gmail.com"
        },
    ],
}

export default (state = INITIAL_STATE , action) =>{
    // console.log("auth reducer =>",action.type)
    switch (action.type){
        case "SETDATA" :
            return({
                ...state,
                users : [...state.users , action.data]
            })
            break;
        default :
            return state ;
    }
}