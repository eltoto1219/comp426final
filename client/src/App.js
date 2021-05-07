import './App.css';
import {Redirect, Route, Switch, HashRouter} from 'react-router-dom'
import Room from "./room";
import Profile from './profile'
import Login from './login'



function App() {
  return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/chat" component={Room}/>
                    <Route path="/profile" component={Profile}/>
                    <Route exact path="/">{<Redirect to="/login" />}</Route>
                </Switch>
            </HashRouter>
        </div>
  );
}

export default App;
