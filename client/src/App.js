import './App.css';
import Test from './test'
import {Redirect, Route, Switch, BrowserRouter, Link} from 'react-router-dom'
import Lobby from "./lobby";
import Room from "./room";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
        <div className="App">
    <BrowserRouter>
        <br></br>
                    <Row>
                        <Col  xs={8} md={2} >
                            <div> <Link to="/">Lobby</Link></div>

                        </Col>
                        <Col  xs={8} md={2} >
                        </Col>
                    </Row>


        <hr />
            <Switch>
                <Route path="/lobby" component={Lobby}/>
                <Route path="/test" component={Test}/>
                <Route path="/chat" component={Room}/>
                <Route exact path="/">{<Redirect to="/lobby" />}</Route>

            </Switch>
    </BrowserRouter>
        </div>
  );
}

export default App;
