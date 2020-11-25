import React from 'react';
// import Home from './container/home';
import './App.css';
import AppRouter from '../src/config/router';


class App extends React.Component {
  render(){
    return(
      <div>
        <AppRouter />
        {/* <Home /> */}
      </div>
    )
  }
}

export default App;


// import firebase from './config/firebase.js'
// import FacebookLogin from './component/facebook_login.js';
// import ImgMediaCard from './component/sell_card';
// import GridIntegration from './component/category';
// import SLIDER from '../src/component/images/slider.PNG';
// import SellCard from '../src/component/sell_card';
// import Container from '@material-ui/core/Container';
// import InfoBox from '../src/component/infoBox';
// import SellPage from  './component/sellPage/index';
// import { isCompositeComponentWithType } from 'react-dom/test-utils';


// class App extends React.Component {

//   render(){
//     return(
      // <div className='main'>

      //   <SearchAppBar />
      //   <GridIntegration />
      //   <img src={SLIDER} width='100%' style={{marginTop :1}} />
        
      //   <Container fixed>
      //     <h2>Fresh Recommendations</h2>
      //   <SellCard />
      //   </Container>
      //   <InfoBox />


      // </div>
//       <div> 
//         <SellPage />

//       </div>
//     )
//   }

// }

// export default App;
