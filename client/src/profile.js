import React from "react"
import axios from "axios"
//import Message from "./message"
//import Card from 'react-bootstrap/Card';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {config} from './constants'
import Navbar from './navbar'
const Chat = require("twilio-chat")

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            channels: '',
            created: '',
            room: '',
        }


    }

    componentDidMount = async () => {
        const { location } = this.props;
        const { state } = location || {};
        const { email } = state || {};
        let token = "";
        let info = ''
        let name = ''
        let room = ''


        if (!email) {
            this.props.history.push("login");
            return
        }

        try {
            token = await this.getToken(email)
        } catch {
            window.location.reload();
            throw new Error("cant get token")
        }

        const client = await Chat.Client.create(token)
        client.on("tokenAboutToExpire", async () => {
            const token = await this.getToken(email)
            client.updateToken(token)
        })
        client.on("tokenExpired", async () => {
            const token = await this.getToken(email)
            client.updateToken(token)
        })

        try {
            room = await axios.get(`${config.url.API_URL}/random`)
        } catch{
            alert("cannot make room")
        }

        try {
            info = await this.getUserInfo(email)
            this.setState({name: email, channels: info.channels, created: info.created,
                room: room.data})

        } catch {
            this.setState({name: email,
                room: room.data})

        }






    }

    getToken = async (email) => {
        const result = await axios.get(`${config.url.API_URL}/token/${email}`)
        const { data } = result
        return data.token
    }

    getUserInfo = async (email) => {
        const result = await axios.get(`${config.url.API_URL}/user/${email}`)
        const { data } = result
        return data
    }


    handleChange = (event) => {
        this.setState({room:event.target.value})
    };


    createjoin = () => {
        // const { location } = this.props;
        // const { state } = location || {};
        let { location } = this.props;
        let { state } = location || {};
        let { email} = state || {};
        const room = this.state.room
        if (email && room) {
            this.props.history.push("chat", { email, room});
        }
    }



    render() {
        return (
        <>
        <Container>
            <Card>
                <Card.Header>
                    You Are: {this.state.name}
                    <br/>
                    You are in {this.state.channels} channels
                    <br/>
                    You were born at {this.state.created}
                </Card.Header>
                <Card.Body>
                    <Card>
                        <Card.Header>
                            Join A Channel
                        </Card.Header>
                        <Card.Body>
                             <input
                                name="room"
                                 required
                                 label="Room"
                                 placeholder="Enter room name"
                                 variant="outlined"
                                 value={this.state.room}
                                 onChange={this.handleChange}/>

                            <br></br>
                            <br></br>
                            <Button variant="primary" onClick={this.createjoin} >Create/Join</Button>

                        </Card.Body>

                    </Card>
                </Card.Body>
            </Card>
        </Container>

        <Navbar {...this.props}/>
        </>
        )
    }
}

export default Profile
