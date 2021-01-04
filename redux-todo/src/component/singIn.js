import { render } from '@testing-library/react';
import React from 'react';
import Firebase from '../config/firebase';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_authentication , set_user } from '../store/action/';

class SingIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spin : false,
        }
    }

    sing_in = (ev) =>{
        ev.preventDefault();

        this.setState({
            spin : !this.state.spin,
        })

        let email = this.refs.email.value ;
        let password = this.refs.password.value ;
        // console.log("Email =>", name , email , password)

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            alert("User Login successfully")
            let currentuser = firebase.auth().currentUser;

            let userObj = {
                uid : currentuser.uid,
                email : currentuser.email,
            }
            this.props.set_authentication();
            this.props.set_user({
                type : "SET_USER",
                user : userObj,
            });
            this.props.history.push("/")
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage)
        });

    }

    render(){

        return(
            <div>      
                <nav className="navbar navbar-inverse">
            <div className="container-fluid">
  
              <div className="navbar-header">
                <a className="navbar-brand" href="#">ToDo</a>
              </div>
  
              <div className="collapse navbar-collapse" id="myNavbar">
                      <ul className="nav navbar-nav navbar-right">
                          <li><Link to="/SingUp"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                      </ul>
              </div>
            </div>
          </nav>

                <div className="container">
                    <div className="col-md-12">
                        <h2 className="heading-2 text-center">Sing In</h2>

                        <div className="col-md-10 col-md-offset-1">
                            <form name="myForm"  onSubmit={this.sing_in} >
                                <div className="form-group">
                                    <label htmlFor="name">Email</label><br />
                                    <input type="email" className="form-control" placeholder="Enter email" ref="email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Pasword</label><br />
                                    <input type="password" className="form-control" placeholder="Enter password" ref="password" />
                                </div>
   
                                <button type="submit" className="btn btn-success">Sing In</button>

                            </form>
                            {
                                (this.state.spin !== false) ? (
                                   <span className="text-danger">Loding....</span>
                                ) : (
                                    ""
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    auth : state.auth,
})

const mapDispatchToprops = (dispatch) => ({
    set_authentication : () => dispatch(set_authentication()),
    set_user : (user_with_type) => dispatch(set_user(user_with_type))
})

export default connect(mapStateToProps, mapDispatchToprops)(SingIn);