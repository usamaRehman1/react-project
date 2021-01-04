
const set_authentication = ()=>{
    return (dispatch) => {
        dispatch({type:"SET_AUTH"})
    }
}

const set_user = (user_with_type) => {
    return (dispatch) => {
        dispatch(user_with_type)
    }
}

const handelChange = ( todo_obj_with_type ) =>{
    return (dispatch) => {
        dispatch(todo_obj_with_type)
    }
}

export {
    set_authentication,
    set_user,
    handelChange,
}