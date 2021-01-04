import { render } from '@testing-library/react';
import React from 'react';
import Firebase from '../config/firebase';
import firebase from 'firebase';
import { Link } from 'react-router-dom'

class SingUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spin : false,
        }
    }

    sing_up = (ev) =>{
        ev.preventDefault();

        this.setState({
            spin:!this.state.spin,
        })

        let name = this.refs.name.value ;
        let email = this.refs.email.value ;
        let password = this.refs.password.value ;
        // console.log("Email =>", name , email , password)

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            let user = result.user ;

            let userObj = {
                uid : user.uid,
                name : name ,
                email : user.email,
            }

            firebase.database().ref('/').child(`user/${userObj.uid}`).set(userObj)
            .then(()=>{
                this.props.history.push("/SingIn")
            })
       
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage)
        });

        
        name = this.refs.name.value = '';
        email = this.refs.email.value = '';
        password = this.refs.password.value = '';

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
                        <li><Link to="/SingIn"><span className="glyphicon glyphicon-log-in"></span> Sing In</Link></li>
                    </ul>
            </div>
          </div>
        </nav>
                <div className="container">
                    <div className="col-md-12">
                        <h2 className="heading-2 text-center">Sing Up</h2>

                        <div className="col-md-10 col-md-offset-1">
                            <form name="myForm"  onSubmit={this.sing_up} >
                                <div className="form-group">
                                    <label htmlFor="name">Name</label><br />
                                   <input type="text" className="form-control" placeholder="enter name" ref="name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Email</label><br />
                                    <input type="email" className="form-control" placeholder="Enter email" ref="email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Pasword</label><br />
                                    <input type="password" className="form-control" placeholder="Enter password" ref="password" />
                                </div>
   
                                <button type="submit" className="btn btn-success">Sing Up</button>

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

export default SingUp;