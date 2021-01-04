import React from 'react';
import Firebase from "../config/firebase";
import firebase from 'firebase';
import { BiSad } from 'react-icons/bi';
import NavBar from './common/navbar';
import TodoItems from './common/todoItems';
import TodoInput from './common/input';
import { connect } from 'react-redux';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { authenticated , user } = this.props.auth;

        console.log("User=>", user)

        console.log("Home Props=>", this.props)
        return (
            <div>
                <NavBar userState={authenticated} />
                {
                    (!authenticated) ? (
                        <div className="container-fluid text-center">
                            <h3>You are not able to paly with todo</h3>
                            <BiSad style={{ fontSize: 35, color: "red" }} />

                        </div>
                    ) : (
                        <div className="container-fluid">
                            <div className="col-md-6 col-md-offset-3 mr-3">
                                <TodoInput />
                                <TodoItems />
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    todo: state.todo,
})


export default connect(mapStateToProps, null)(TodoApp);

