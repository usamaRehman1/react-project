import React from "react";
import { BrowserRouter as Router  , Route } from "react-router-dom";
import Home from '../container/home';
import FbLogIn from "../container/facebook_login";
import SellPage from "../component/sellPage/index";


class AppRouter extends React.Component {
    render(){
        return(
            <Router>
                <Route exact path = "/" component ={Home} />
                <Route exact path ='/login' component= {FbLogIn} />
                <Route exact path = "/sellpage" component ={SellPage} />
            </Router>
        )
    }
}

export default AppRouter ;