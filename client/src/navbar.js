import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class Navbar extends React.Component {
    constructor(props) {

        super(props)
        this.state = {email: this.email}
        this.pushEmail = this.pushEmail.bind(this)
    }

    pushEmail = () => {
        const { location } = this.props
        const { state } = location || {}
        const { email } = state || {}
        this.props.history.replace("/profile", {email})
    }

    render(){
        const { location } = this.props
        const { state } = location || {}
        const { email } = state || {}
        if(email){
            return (<>
                <br></br>
                <Row>
                    <Col  xs={8} md={2} >
                        <Link to="/login">Logout</Link>
                    </Col>
                    <Col  xs={8} md={2} >
                        <Button variant="link" onClick={this.pushEmail} to="/profile">Profile</Button>
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

