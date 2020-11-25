import React from 'react';
import Firebase from "../config/firebase.js" ;
import firebase from "firebase";
// import { connect } from "react-redux ";
// import { set_user , set_card , curr_user } from "../store/action/index";
import { Link } from "react-router-dom";
import { Button , Spinner } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LOGO from '../../src/component/images/logo.png';
import OLX_LOGO2 from '../../src/component/images/olx_logo2.png';
import './style.css';


class FbLogIn extends React.Component {
  constructor(props) {
    super(props);
    
    // console.log("props =>",)
    this.state = {
      logInUser: [
        {
          id: 12234,
          name: "usama",
          email: "usma@mail.com",
        },
      ],
    }
    this.lognInFb = this.lognInFb.bind(this);
  }


  lognInFb() {
    let history = this.props.history ;
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var user = result.user;
      // console.log("user =>", user)
      let createUser = {
        name : user.displayName,
        email : user.email,
        profile : user.photoURL,
        uid : user.uid
      }
      localStorage.setItem("CurrUser", JSON.stringify(createUser))
      firebase.database().ref('/').child(`user/${user.uid}`).set(createUser)
      .then(() =>{
        alert("User successfully login") 
        history.push("/");
      })
    })
    .catch(function(error) {
      console.log("error =>",error.message)
    });

  }


  render() {
    // console.log("Login page =>", this.props.currUser)
    return (
      <div>
        <div>
          <AppBar position="static" color='default' >
            <Toolbar>
              <Link to="/">
                <ArrowBackIcon style={{ fontSize: "30px", color: " rgb(0,51,25)" }} />
              </Link>
              <img src={LOGO} width='65' className="tag" />
            </Toolbar>
          </AppBar>
        </div>

        <div className="login_Box" >
          <img src={OLX_LOGO2} width="200" />
          <div className="multiBtn">
            {/* <Spinner animation="grow" variant="primary"/> */}
            <br /><br />
            <Button variant="outline-primary" onClick={this.lognInFb} >CONTINUE WITH FACEBOOK</Button>
            <br />
          </div>
        </div>

      </div>
    )
  }
}


// const mapStateToProps = (state) => ({
//   currUser : state.currUser,
  // users : state.users,
  // sellCard : state.sellCard,
// })

// const mapDispatchToProps = (dispatch) => ({
//   curr_user : () => dispatch(lognInFb())

// })


// export default connect(mapStateToProps , null)(FbLogIn);  
export default FbLogIn;  