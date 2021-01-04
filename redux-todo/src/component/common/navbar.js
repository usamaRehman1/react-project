import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Firebase from '../../config/firebase';
import firebase from 'firebase';
import { set_authentication , set_user } from '../../store/action';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  userLogout = ()=>{
    console.log("userLogout")
    firebase.auth().signOut()
    .then(() => {

      this.props.set_authentication();
      this.props.set_user({
        type: "SET_USER",
        user : null,
      })
      
    }).catch((error) => {
      console.log(error.message)
    });
  }

  render() {
    console.log("NavBar Props=>", this.props.userState)
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">

            <div className="navbar-header">
              <a className="navbar-brand" href="#">ToDo</a>
            </div>

            <div className="collapse navbar-collapse" id="myNavbar">

              {
                (this.props.userState === false) ? (

                  <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/SingUp"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><Link to="/SingIn"><span className="glyphicon glyphicon-log-in"></span> Sing In</Link></li>
                  </ul>

                ) : (
                    <ul className="nav navbar-nav navbar-right">
                      <li><a onClick={this.userLogout}><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
                    </ul>
                  )
              }
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapDispatchToprops = (dispatch)=> ({
  set_authentication : () => dispatch(set_authentication()),
  set_user : (user_with_type) => dispatch(set_user(user_with_type)),

})

export default connect(null, mapDispatchToprops)(NavBar);