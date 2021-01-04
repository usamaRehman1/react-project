import React from 'react';
import {  BrowserRouter as Router , Route } from 'react-router-dom'; 
import TodoApp from '../component/home';
import SingUp from '../component/singUp';
import SingIn from '../component/singIn';


class ReactRouter extends React.Component {

    render(){
        return(
            <Router>
                <Route exact path="/" component={TodoApp} />
                <Route exact path="/SingUp" component={SingUp} />
                <Route exact path="/SingIn" component={SingIn} />
            </Router>
        )
    }
}

export default ReactRouter;