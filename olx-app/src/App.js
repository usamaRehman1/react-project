import React from 'react';
// import firebase from './config/firebase.js'
// import FacebookLogin from './component/facebook_login.js';
// import ImgMediaCard from './component/sell_card';
import SearchAppBar from './component/navbar';
import GridIntegration from './component/category';
import SLIDER from '../src/component/images/slider.PNG';
// import SellCard from '../src/component/sell_card';
// import Container from '@material-ui/core/Container';
import InfoBox from '../src/component/infoBox';
import './App.css';
// import { isCompositeComponentWithType } from 'react-dom/test-utils';


class App extends React.Component {

  render(){
    return(
      <div className='main'>
        <SearchAppBar />
        <GridIntegration />
        <img src={SLIDER} width='100%' style={{marginTop :1}} />
        
        {/* <Container fixed>
          <h2>Fresh recommendations</h2>
        <SellCard />
        </Container> */}
        <InfoBox />


      </div>
    )
  }

}

export default App;
