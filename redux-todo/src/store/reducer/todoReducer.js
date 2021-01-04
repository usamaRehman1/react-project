const INITIALSTATE = {
    todoItems : [
    ]
}

export default (state = INITIALSTATE , action) => { 
    switch (action.type) {
        case "ADD_ITEM":
            return({
                ...state,
                todoItems : [...state.todoItems , action.payload],
            })
        case "EDIT_ITEM":
            return({
                ...state,
                todoItems : action.payload,
            })
        case "DELETE_ITEM":
            return({
                ...state,
                todoItems : action.payload,
            })
        default:
            return state
    }
}