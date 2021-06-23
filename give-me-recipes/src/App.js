import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
function App() {
  return (
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>

          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
