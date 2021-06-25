import React, { useState } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Userlist from "./Userlist";
import UserProfile from "./UserProfile";
import PageNotFound from "./PageNotFound";
import { UserContext } from './UserContext'

function App () {
  const [user, setUser] = useState("")
  return (
    <BrowserRouter>
    <UserContext.Provider value={user}>
          <div>
          <nav> 
            <ul>
              <li><Link to="/">Login</Link></li> 
              <li><Link to="/userlist">UserList</Link></li>
              <li><Link to="/userprofile">UserProfile</Link></li>
              <li><Link to="/pagenotfound">PageNotFound</Link></li>
            </ul>
          </nav>

          <Switch> {/* Ce composant ne s'affichera pas à l'écran, il liste les chemins possibles */}
            <Route setuser={setUser} exact path="/" component={Login}/> {/* Chaque route est un composant <Route> */}
						<Route path="/userlist" component={Userlist}/>
            <Route path="/userprofile" component={UserProfile}/>
						<Route path="*" component={PageNotFound}/>
          </Switch>
        </div>
        </UserContext.Provider>
    </BrowserRouter>
   

  
  );
}


export default App;
