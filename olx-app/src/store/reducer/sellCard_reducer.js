const INITIAL_STATE = {
    sellCard : [
        {
            tital : "sumsung" ,
            location : "karchi",

        },
    ]
}

export default (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case "CREATECARD" :
            return ({
                ...state , 
                sellCard : [...state.sellCard , action.card],
            })
    default :
        return state ;
    }
}