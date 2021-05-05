import React from 'react'
import axios from "axios"
//import Message from "./message"
//import { config } from './constants'
//const Chat = require("twilio-chat")

class Test extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
        this.helloWorld = this.helloWorld.bind(this);

        //this.scrollDiv = React.createRef()
    }

    async componentDidMount(){
        //const result = await axios.get("http://localhost:5000/api/token").then((response)=>{
        const result = await axios.get("http://18.215.154.83/token").then((response)=>{
            console.log("here")
            return response

        }).catch((error)=>{
            console.log(error)
        })

        console.log(result)
        // const { location } = this.props
        // const { state } = location || {}
        // const { email, room } = state || {}
        // let token = ""
        // console.log("test", result)
    }

    helloWorld(){
        console.log("wtf")
    }

    render() {
        return(
                <div><h2>why</h2></div>

        )
    }
}

export default Test
