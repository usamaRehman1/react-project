import React, { Component } from 'react' ;
import { connect } from 'react-redux';
import { set_user , set_card , curr_user} from '../store/action/index';
import Navbar from '../component/navbar';
import CategoryList from '../component/category';
import SLIDER from '../component/images/slider.PNG';
import SellCard from "../component/sell_card"
// import sellCard from "../component/sell_card";
import SLIDERBOTTOM from '../component/images/sliderBottom.PNG';
import InfoForWeb from "../component/infoBox";
import './style.css';


class Home extends Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div>
                <Navbar  item = {this.props}/>
                <CategoryList />
                <img src={SLIDER}  />
                <div className="child_container">
                    <h4 style={{marginBottom :30}}>Fresh recommendations</h4>
                    <div className="card_container">
                        <SellCard />
                    </div>                    

                </div>
                <img src={SLIDERBOTTOM}  />
                <InfoForWeb />

                {/* <button onClick={()=> this.props.set_user(user)}>SET USER</button>
                <button onClick={()=> this.props.set_card(card)}>CREATE CARD</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users : state.users,
    sellCard : state.sellCard,
    currUser : state.currUser,
})

const mapDispatchToProps = (dispatch) => ({
    set_user : (user) => dispatch(set_user(user)),
    set_card :  (card) => dispatch(set_card(card)),
    curr_user : () =>  dispatch(curr_user()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home) ;
// export default Home ;