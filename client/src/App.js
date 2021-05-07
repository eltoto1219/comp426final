import './App.css';
import {Redirect, Route, Switch, BrowserRouter} from 'react-router-dom'
import Room from "./room";
import Profile from './profile'
import Login from './login'



function App() {
  return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/chat" component={Room}/>
                    <Route path="/profile" component={Profile}/>
                    {/* <Route exact path="/">{<Redirect to="/login" />}</Route> */}
                </Switch>
            </BrowserRouter>
        </div>
  );
}

export default App;
