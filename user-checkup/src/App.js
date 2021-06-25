import React, { useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Userlist from "./Userlist";
import UserProfile from "./UserProfile";
import PageNotFound from "./PageNotFound";
import { UserContext } from './UserContext';

function App () {
  const [user, setUser] = useState("")

  useEffect(() => {
    console.log("username IN APP", user)
  });
  return (
    
    <BrowserRouter>
    <UserContext.Provider value={user}>
          <div>
          {/* <nav> 
            <ul>
              <li><Link to="/">Login</Link></li> 
              <li><Link to="/userlist">UserList</Link></li>
              <li><Link to="/userprofile">UserProfile</Link></li>
              <li><Link to="/pagenotfound">PageNotFound</Link></li>
            </ul>
          </nav>  <h1>User Name :{user}</h1>
          */}
          <Switch> 
          <Route exact path="/"><Login setuser={setUser}/> </Route>
						<Route path="/userlist" ><Userlist /></Route>
            <Route path="/userprofile"> <UserProfile /> </Route>
						<Route path="*"> <PageNotFound/> </Route>
          </Switch>
        </div>
        </UserContext.Provider>
    </BrowserRouter>
   

  
  );
}


export default App;
