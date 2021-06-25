
import React, { useContext} from 'react'
import {UserContext} from './UserContext'
import './App.css';

function Navigation() {
    let username = useContext(UserContext);
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <div className="navbar-nav">
        <a className="nav-item nav-link active" href="/">Login</a>
        <a className="nav-item nav-link" href="/userlist">Userlist</a>
        </div>
        <p className="">Connecté avec {username}</p>
    </nav>
       
  );
}

export default Navigation;