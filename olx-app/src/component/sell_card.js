import React from 'react';
import { Card  } from 'react-bootstrap';
import CAR from '../component/images/car1.jpeg';


class SellCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

      <Card style={{ width: '15rem' }}>
        <Card.Img src={CAR} variant="top" />
        <Card.Body>
          <Card.Title>RS : 20,000</Card.Title>
          <Card.Text className ="text-muted" style ={{fontSize : "15px"}}>some detaial here ....</Card.Text>
          <Card.Text className ="text-muted" style ={{fontSize : "15px"}}><span >Location</span> <span style={{float:"right"}}>Date</span></Card.Text>
        </Card.Body>
      </Card>

    )
  }
}

export default SellCard ;





