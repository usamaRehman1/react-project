import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import LOGO from '../images/logo.png';
import './style.css';

class SellPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tital : '',
            dis : '',
            category : '',
            price : '',
            location : '',
        }
    }


    post = () => {
        let tital = this.refs.textTital.value ;
        let dis = this.refs.description.value ;
        let category = this.refs.category.value ;
        let price = this .refs.price.value ;
        let location = this.refs.textLocation.value ;

        let cardDetail = {
            tital,
            dis,
            category,
            price,
            location,
        }
        
        this.setState({
            tital : this.state.tital,
            dis : this.state.dis,
            category : this.state.category,
            price : this.state.price,
            location : this.state.location,
        })
    }

render(){
    console.log("sellpage = >", this.props)
    return (
        <div className="root">
        <div>
            <AppBar position="static" color='default' >
                <Toolbar>
                    <Link to="/">
                    <ArrowBackIcon style={{ fontSize: "30px" , color:" rgb(0,51,25)" }} />
                    </Link>
                    <img src={LOGO} width='65' className="tag" />
                </Toolbar>
            </AppBar>
        </div>
        <Container className='postAddContainer'>
            <h4 style={{ textAlign: 'center' }}>POST YOUR AD</h4>
            <Container className="sellForm">
                <h3>INCLUDE SOME DETAILS</h3>
                <hr />
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>AD TITAL :</Form.Label>
                        <Form.Control type="text" placeholder="iteam tital"  ref="textTital"  />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>SELECT CATEGORY : </Form.Label>
                        <Form.Control as="select" ref="category">
                            <option>Mobiles</option>
                            <option>Vehicles</option>
                            <option>Bike</option>
                            <option>Furniture & Home Decor</option>
                            <option>Fashion & Beauty</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>DESCRIPTION :</Form.Label>
                        <Form.Control as="textarea" rows={2} ref='description' />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>SET A PRICE :</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Rs</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="number"  ref="price"/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>LOCATION :</Form.Label>
                        <Form.Control type="text" placeholder="location"  ref="textLocation"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>UPLOAD IMAGE :</Form.Label>
                        <Form.File id="productImg" />
                    </Form.Group>
                    <Button variant="dark" onClick={()=> this.post()}>POST NOW</Button>
                </Form>
            </Container>
        </Container>
    </div>
)
}
}
export default SellPage;

















// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     tag: {
//         marginLeft: "20px",
//         width: '65px',
//         height: '65px',
//     },
//     form: {
//         backgroundColor: 'lightBlue',
//         display: 'flex',
//         flexWrap: 'wrap',
//         margin: 10,
//     },
//     title: {
//         margin: 10,
//         textAlign: 'center',
//     },
//     cellForm: {
//         padding: 10,
//         height: 500,
//         width: 800,
//         margin: '0 auto',
//     },
//     selectCategory: {
//         width: '100%',
//         height: 100,
//         borderBottom: `2px solid black`

//     },
//     includeSomedetal: {
//         margin: 20,
//     },
//     postAddContainer: {
//         position: "relative",
//         top: 10,
//         width: 800,
//         margin: '0 auto',
//     },
//     sellForm: {
//         padding: 20,
//         position: 'relative',
//         width: '70%',
//         margin: '0 auto',
//         border: `1px solid rgb(0,51,25)`,
//         borderRadius: '5px',
//     }

// }));


//     render(){

//         return (
//             <div className={classes.root}>
//             <div>
//                 <AppBar position="static" color='default' >
//                     <Toolbar>
//                         <ArrowBackIcon style={{ fontSize: "30px" }} onClick={()=> backArrow()} />
//                         <img src={LOGO} width='65' className={classes.tag} />
//                     </Toolbar>
//                 </AppBar>
//             </div>
//             <Container xs={12} md={8} className={classes.postAddContainer}>
//                 <h4 style={{ textAlign: 'center' }}>POST YOUR AD</h4>
//                 <Container className={classes.sellForm}>
//                     <h3>INCLUDE SOME DETAILS</h3>
//                     <hr />
//                     <Form>
//                         <Form.Group controlId="exampleForm.ControlInput1">
//                             <Form.Label>AD TITAL :</Form.Label>
//                             <Form.Control type="text" placeholder="iteam tital" />
//                         </Form.Group>
//                         <Form.Group controlId="exampleForm.ControlSelect1">
//                             <Form.Label>SELECT CATEGORY : </Form.Label>
//                             <Form.Control as="select">
//                                 <option>Mobiles</option>
//                                 <option>Vehicles</option>
//                                 <option>Bike</option>
//                                 <option>Furniture & Home Decor</option>
//                                 <option>Fashion & Beauty</option>
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="exampleForm.ControlTextarea1">
//                             <Form.Label>DESCRIPTION :</Form.Label>
//                             <Form.Control as="textarea" rows={2} />
//                         </Form.Group>
//                         <Form.Group controlId="exampleForm.ControlInput1">
//                             <Form.Label>SET A PRICE :</Form.Label>
//                             <InputGroup className="mb-3">
//                                 <InputGroup.Prepend>
//                                     <InputGroup.Text>Rs</InputGroup.Text>
//                                 </InputGroup.Prepend>
//                                 <Form.Control type="number" />
//                             </InputGroup>
//                         </Form.Group>
//                         <Form.Group controlId="exampleForm.ControlInput1">
//                             <Form.Label>LOICATION :</Form.Label>
//                             <Form.Control type="text" placeholder="location" />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>UPLOAD IMAGE :</Form.Label>
//                             <Form.File id="productImg" />
//                         </Form.Group>
//                         <Button variant="dark" style={{ width: "100%" }}>POST NOW</Button>
//                     </Form>

//                 </Container>


//             </Container>
//         </div>
//     )
// }