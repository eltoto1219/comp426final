import React from "react"
//import axios from "axios"
//import Message from "./message"
import Card from 'react-bootstrap/Card';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {config} from './constants'
//const Chat = require("twilio-chat")
//
import Navbar from './navbar'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
        }

    }


    login = () => {
        //console.log(this.props)
        const email = this.state.email;
        if (email !== '') {
            this.props.history.push("profile", {email});
        }
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render(){
        let email  = this.state.email;
        return (
        <>
        <Container>
            <Card>
                <Card.Header>
                    Login or Register Account
                </Card.Header>

                <Card.Body>
                    <input
                        name="email"
                        required
                        label="Email address"
                        placeholder="Enter email address"
                        variant="outlined"
                        type={email}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>
                    <Button
                        style={styles.button}
                        className="btn-primary"
                        variant="primary"
                        onClick={this.login}
                    >Login</Button>
                </Card.Body>
            </Card>
        </Container>

        <Navbar/>
        </>
            )
    }
}

const styles = {
    button: {
        display: "flex",
        marginRight: "auto",
        marginLeft: "auto",
    }
}


export default Login
