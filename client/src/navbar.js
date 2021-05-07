import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount(){
    }


    profile = () => {
        let { location } = this.props
        let { state } = location || {}
        let { email } = state || {}
        const room = ''

        this.componentWillUnmount()
        this.props.history.replace("profile", {email, room})
    }

    logout = () => {
        let { location } = this.props
        let { state } = location || {}
        let { email, room} = state || {}
        room = ''
        email = ''
        this.componentWillUnmount()
        this.props.history.push("login")
    }


    render(){
        let { location } = this.props
        let { state } = location || {}
        let { email } = state || {}
        if(email){
            return (<>
                <br></br>
                <Row>
                    <Col  xs={8} md={2} >
                        <Button variant="link" onClick={this.logout}>Logout</Button>
                    </Col>
                    <Col  xs={8} md={2} >
                        <Button variant="link" onClick={this.profile}>Profile</Button>
                    </Col>
                </Row>
                <hr />
            </>)

        }else{
            return (<>
                    <br></br>
                    <Row>
                        <Col  xs={8} md={2} >
                        <Link to="/login">Login</Link>
                        </Col>
                        <Col  xs={8} md={2} >
                        <Link to="/profile">Profile</Link>
                        </Col>
                    </Row>
                    <hr />
                </>)
        }
    }

}

export default Navbar

