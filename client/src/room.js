import React from "react"
import axios from "axios"
import Message from "./message"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {config} from './constants'
import Navbar from './navbar'
const Chat = require("twilio-chat")

class Room extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            text: "",
            messages: [1],
            channel: null,
        }

        this.componentDidMount = this.componentDidMount.bind(this)

    }

    componentDidMount = async () => {
        let { location } = this.props
        let { state } = location || {}
        let { room , email} = state || {}

        //validation

        if (!email || !room) {
            this.props.history.push("/")
            return
        }

        //token stuff
        //token stuff
        let token = ''

        try {
            token = await this.getToken(email)
        } catch {
            throw new Error("cant get token")
        }

        let client = await Chat.Client.create(token)



        let channels = await client.getSubscribedChannels()

        client.on("tokenAboutToExpire", async () => {
            let token = await this.getToken(email)
            client.updateToken(token)
        })

        client.on("tokenExpired", async () => {
            let token = await this.getToken(email)
            client.updateToken(token)
        })

        client.on("channelJoined", async (channel) => {
            this.joinChannel(channel)


        })


        try {
            let channel = await client.getChannelByUniqueName(room)
            this.joinChannel(channel)

        } catch(err) {
            try {
                let channel = await client.createChannel({
                    uniqueName: room,
                    friendlyName: room,
                })

                this.joinChannel(channel)


            } catch {
                throw new Error("cant create a channel")
            }
        }



    }

    getToken = async (email) => {
        let result = await axios.get(`${config.url.API_URL}/token/${email}`)
        let { data } = result
        return data.token
    }

    joinChannel = async (channel) => {
        if (channel.channelState.status !== "joined") {
            await channel.join()
        }else if(channel.channelState.status === "joined"){
            channel.on("messageAdded", this.handleMessageAdded)
            let b = await channel.getMessages()
            this.setState({messages: b.items})
        }else{
            console.log(channel.channelState.status)
        }

        this.setState({
            channel:channel,
            loading: false
        })




    }


    handleMessageAdded = (message) => {
        let { messages } = this.state
        this.setState({
            messages: [...messages, message],
        },
        )
    }


    sendMessage = () => {
        let { text, channel } = this.state
        if (text) {
            this.setState({ loading: true })
            channel.sendMessage(String(text).trim())
            this.setState({ text: "", loading: false })
        }
    }

    render() {
        let { loading, text, messages, channel } = this.state
        let { location } = this.props
        let { state } = location || {}
        let { email, room } = state || {}


      return (

        <>
        <Navbar {...this.props}/>
        <Container>
            <Card>
                <Card.Header>
                    {`Room: ${room}, User: ${email}`}
                </Card.Header>

                <Card.Body>
                    <Container >
                        <ListGroup>{messages && messages.map((message) =>
                        <Message
                                key={message.index}
                                //key={new Date().getTime()}
                                message={message}
                                email={email}/>
                        )}</ListGroup>
                    </Container>

                    <Row>
                        <Col  xs={12} md={8} >
                            <input  required
                        style={styles.message}
                        placeholder="Enter message"
                        variant="outlined"
                        rows={2}
                        value={text}
                        disabled={!channel}
                        onChange={(event) =>
                          this.setState({ text: event.target.value })
                        }/>
                        </Col>
                        <Col  xs={6} md={4} >
                        <input
                            variant="primary"
                            value="send"
                            type="button"
                        style={styles.message}
                            onClick={this.sendMessage}
                            disabled={!channel}
                        />
                        </Col>


                    </Row>
                </Card.Body>
            </Card>
        </Container>

        </>
      )
    }
}

let styles = {
    message: {display: "block", width: "100%", borderRadius: 12, padding: -4}

};

export default Room
