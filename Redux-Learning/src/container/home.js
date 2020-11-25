import React from 'react';
import { connect } from 'react-redux';
import { set_data } from '../store/action/index';
import './style.css';


class Home extends React.Component {
    render() {
        console.log("prope =>", this.props)
        console.log("get Name : " ,this.props.users.users[0].name)
        console.log("get App Name : " , this.props.apps.apps[0].app_name)

        let user = { name: "huzaifa", emial: "huzaifa@gmail.com", };
        let app = { app_name: "olx App", };

        return (
            <div>
                <h1>REDUX LEARNING</h1>
                <button onClick={() => this.props.set_data(user, app)}>Set Data</button>
            </div>
        )
    }
}

const mapStateToProps = (state, app) => ({
    users: state.users,
    apps: state.apps,
})

const mapDispatchToProps = (dispatch, app) => ({
    set_data: (user, app) => dispatch(set_data(user, app))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);