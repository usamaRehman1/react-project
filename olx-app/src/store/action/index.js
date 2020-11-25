const set_user = (user)=> {
    return (dispatch) => {
        dispatch({type : "SETUSER" , user : user})
    }
}
const set_card = (card)=> {
    return (dispatch) => {
        dispatch({type:"CREATECARD" , card : card});
    }
}
const curr_user = (payload) => {
    return (dispatch) => {
        dispatch({type : "CURRUSER" , payload :  payload})

        console.log("Add Current user")
    }
}

export {
    set_user,
    curr_user,
    set_card,
}