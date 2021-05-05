import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Grid,
//   TextField,
//   Card,
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
// } from "@material-ui/core";


class Lobby extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            room: "",
        };
    }

    login = () => {
        //console.log(this.props)
        const { email, room } = this.state;
        if (email && room) {
            this.props.history.push("chat", { room, email });
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render () {
        const { email, room } = this.state;
        return (
        <>
            <Card>
                <Card.Header>
                    Enter A Room
                </Card.Header>
                <Card.Body>
                    <input
                        name="email"
                     required
                     label="Email address"
                     placeholder="Enter email address"
                     variant="outlined"
                     type="email"
                     value={email}
                     onChange={this.handleChange}/>
                    <br></br>

                    <input
                        name="room"
                         required
                         label="Room"
                         placeholder="Enter room name"
                         variant="outlined"
                         value={room}
                         onChange={this.handleChange}/>

                    <br></br>
                    <br></br>
                    <Button variant="primary" onClick={this.login}>Login</Button>
                </Card.Body>
            </Card>
        </>)
        }
}


export default Lobby;



