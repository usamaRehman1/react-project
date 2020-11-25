const set_data = (data , app)=>{
    return (dispatch) => {
        dispatch({type : "SETDATA" , data :  data , app : app});
        // console.log("running....")
    }
}

export {
    set_data
}