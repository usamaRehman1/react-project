import React from 'react'

class Child extends React.Component {

    
    // static getDerivedStateFromProps(props , state){
    //     console.log("getDriveStateFromProps children =>", props)
    //     return null
    // }

    componentWillUnmount(){
        console.log("component khatam")
    }

    render(){
        return(
            <div>
                <h1>Counter : {this.props.count}</h1>
            </div>
        )
    }
}
export default Child 