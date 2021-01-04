import React from 'react';
import { connect } from 'react-redux';
import { handelChange } from '../../store/action';
import Firebase from "../../config/firebase";
import firebase from 'firebase';

class TodoInput extends React.Component {

    addItemHandler = () => {
        let newItem = {
            item : this.refs.item.value,
        }
        let index = this.props.todo.todoItems.length;


        let CurrentUser = firebase.auth().currentUser;

        firebase.database().ref('/').child(`todos/${CurrentUser.uid}/${index}`).set({ todo : this.refs.item.value })
            .then((v) =>{
                this.refs.item.value = ""

                this.props.handelChange({
                    type : "ADD_ITEM",
                    payload : newItem,
                })
            })
    }

    render() {
        console.log("Props=>", this.props)
        return (
            <div className="container-fluid">

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <input type="text" className="form-control" placeholder="enter items... " ref="item" />
                    <button className="btn btn-success" onClick={this.addItemHandler} >ADD</button>
                </div>

            </div>
        )
    }

} 

const mapStateToProps = (state)=>({
    todo: state.todo, 
})
const mapDispatchToprops = (dispatch) => ({
    handelChange : (todo_obj_with_type) => dispatch(handelChange(todo_obj_with_type))
})

export default connect(mapStateToProps, mapDispatchToprops)(TodoInput) ;