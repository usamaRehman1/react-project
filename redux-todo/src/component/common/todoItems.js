import React from 'react';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { handelChange } from '../../store/action';
import { connect } from 'react-redux';
import Firebase from "../../config/firebase";
import firebase from 'firebase';

class TodoItems extends React.Component {

    deleteHandeler = (todoList , item , i)=> {
        todoList.splice(i , 1);

        let CurrentUser = firebase.auth().currentUser;

        firebase.database().ref('/').child(`todos/${CurrentUser.uid}/${i}`).remove()
        .then((v)=>{
            this.props.handelChange({
                type: "DELETE_ITEM",
                payload: todoList,
            })
        })
    } 

    editHandeler = (todoList , item , i) => {
        var changeText = prompt(`Edit your index # ${i}: `, item);
        todoList.splice(i , 1 , { item : changeText });

        let CurrentUser = firebase.auth().currentUser;

        firebase.database().ref('/').child(`todos/${CurrentUser.uid}/${i}`).set({ todo : changeText})
        .then((v)=>{
            this.props.handelChange({
                type : "EDIT_ITEM",
                payload : todoList,
            })
        })

    }
    
    render(){
        let todoList = this.props.todo.todoItems ;
        return(
            <div style={{marginTop:"20px"}}>
                <ul className="list-group mt-3">
                    {
                        this.props.todo.todoItems.map((items , i)=>{
                            return(
                                <li 
                                   key={i} 
                                   className="list-group-item" style={{display:"flex", flexDirection:"row" , justifyContent:"space-between"}}
                                >
                                    {items.item}
                                    <div>
                                        <span style={{fontSize:20, color:'green', cursor: "pointer"}} onClick={(ev)=> this.editHandeler(todoList ,items.item , i)}><BiMessageSquareEdit /></span>
                                        <span style={{fontSize:20, color:'red', cursor: "pointer"}} onClick={(ev)=> this.deleteHandeler(todoList ,items.item , i)}><RiDeleteBin6Line /></span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    todo : state.todo,
})

const mapDispatchToProps = (dispatch)=>({
    handelChange : (todo_obj_with_type) => dispatch(handelChange(todo_obj_with_type))
})


export default connect(mapStateToProps , mapDispatchToProps)(TodoItems);