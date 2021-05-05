import React from "react"
import axios from "axios"
import Message from "./message"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
const Chat = require("twilio-chat")

class Room extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "",
            messages: [],
            loading: false,
            channel: null,
        }

    }

    componentDidMount = async () => {
        const { location } = this.props
        const { state } = location || {}
        const { email, room } = state || {}

        //validation

        if (!email || !room) {
            this.props.history.replace("/")
        }

        //token stuff
        //token stuff
        let token = ''

        try {
            token = await this.getToken(email)
        } catch {
            throw new Error("Unable to get token, please reload this page")
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
        // joining a chat
        client.on("channelJoined", async (channel) => {
            // getting list of all messages since this is an existing channel
            const messages = await channel.getMessages()
            this.setState({ messages: messages.items || [] })
        })

        try {
            const channel = await client.getChannelByUniqueName(room)
            this.joinChannel(channel)
        } catch(err) {
            try {
                const channel = await client.createChannel({
                    uniqueName: room,
                    friendlyName: room,
                })
                this.joinChannel(channel)
            } catch {
                throw new Error("Unable to create channel, please reload this page")
            }
        }
    }

    getToken = async (email) => {
        const result = await axios.get(`https://www.iwantadomainplz.com/token/${email}`)
        const { data } = result
        console.log("wweee")
        return data.token
    }

    joinChannel = async (channel) => {
        if (channel.channelState.status !== "joined") {
            await channel.join()
        }

        this.setState({
            channel:channel,
            loading: false
        })

        channel.on("messageAdded", this.handleMessageAdded)
    }


    handleMessageAdded = (message) => {
        const { messages } = this.state
        this.setState({
            messages: [...messages, message],
        },
        )
    }


    sendMessage = () => {
        const { text, channel } = this.state
        if (text) {
            this.setState({ loading: true })
            channel.sendMessage(String(text).trim())
            this.setState({ text: "", loading: false })
        }
    }

    render() {
      const { loading, text, messages, channel } = this.state
      const { location } = this.props
      const { state } = location || {}
      const { email, room } = state || {}

      return (
        <>
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

const styles = {
    message: {display: "block", width: "100%", borderRadius: 12, padding: -4}

};

export default Room
