import React from 'react';
import Child  from './component/child';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      counter : 0 ,
      data : [],
    }

    // console.log("Constructor Running No 1")
  }

  static getDerivedStateFromProps(){
    // console.log("getDrivedStateFromProps Running No 2")
    return null
    // if we want to change state in getDerivedStateFromprops so we return object 
    // it will be change state before reder
    // return {
    //   counter : 5
    // }
  }
  

  //  async componentDidMount(){
  //    // after rendering UI perfectly componentDidMount will run 
  //   // console.log("ComponentDidMount")
  //   let fetchApi = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   let data =  await fetchApi.json() ;
  //   // console.log("Data =>" , data)

  //   this.setState({
  //     data : data,
  //   })
  // }

  // shouldComponentUpdate(){
  //   //This function will stop the render
  //   if(this.state.counter < 5){
  //     return true
  //   }else{
  //     return false
  //   }
  // }


  // getSnapshotBeforeUpdate(prevProps , prevState){
  //    // this func. will get snapshote for state Before Updating
  //   console.log("getSnapshotBeforeUpdate=>", prevState);
  //   return 10
  // }

  // componentDidUpdate(prevProps , prevState , snapshot){
  //   //this func. will get snapshot for state after updating
  //   console.log("componentDidMount=>", snapshot)
  // }


  render(){
    // console.log("Render Running No 3")
    return (
      <div className="App">
        <h1>React LifeCycle</h1>

        {
          (this.state.counter < 5) ? (
            <Child count={this.state.counter}/>
          ) : (
            <h1>Component Destroy</h1>
          )

        }
        <button onClick={() => this.setState({counter : this.state.counter + 1})}> Increment</button>
        <button onClick={() => this.setState({counter : this.state.counter - 1})}> Decrement</button>
        {/* {
          this.state.data.map((val , ind) => {
            return <h4 key={ind}>{val.title}</h4>
          })
        } */}
      </div>
    );
  }
}

export default App;
