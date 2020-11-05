import React from 'react';
// import firebase from '../config/firebase.js'


class FacebookLogin extends React.Component {
    constructor(){
        super();
    }

    
  facebookLogIn = ()=>{
    console.log("asd")
    // var provider = new firebase.auth.FacebookAuthProvider();
    // firebase.auth().signInWithPopup(provider)
    // .then(function(result) {
    //     console.log(result)
    //   }).catch(function(error) {
    //     var errorMessage = error.message;
    //     console.log(errorMessage)
    //   });

  }

    render(){
        return(
            <div>
            <h1>LogIn Page</h1>
            <button onClick={this.facebookLogIn}>FACEBOOK LOGIN</button>
          </div>
        )
    }
}

export default FacebookLogin;