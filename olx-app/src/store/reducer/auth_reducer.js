const INITIAL_STATE = {
    users : [
        {
            id : 12345,
            name : "usama",
            email : "usama@gmail.com",
            thumnail : "image.jpg",
        },
    ],
    currUser : {},
}

export default (state = INITIAL_STATE , action) => {
    switch (action.type) {
        // case 'SETUSER' :
        //     return ({
        //         ...state,
        //     })
        case "CURRUSER":
            return ({
                ...state,
                currUser : action.payload,
            })
        default :
           return state ;
    }
} 