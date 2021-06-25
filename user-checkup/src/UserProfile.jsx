import React from "react";
import Navigation from "./Navigation";
import './App.css';

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userinfo:{},
        }
    }
    async componentDidMount(){
        try{
        const url = window.location.href.split("/");
        const index =url[4];
        const RESULT = await fetch(`https://jsonplaceholder.typicode.com/users/` + index );
        const resultJson = await RESULT.json();
        console.log("RESULT_JSON",resultJson);
            this.setState({
                userinfo:{username: resultJson.username,name: resultJson.name, email:resultJson.email}
            })
        console.log(this.state.userinfo);
        }catch(error){
            console.error(error);
        }  
    }
  render() {
  return (
      <div>
        <Navigation />
        <div className="userlist">
            <h2>UserProfile</h2>
            <table className="table">
            <thead>
            <tr>
            <th scope="col">Clé</th>
            <th scope="col">Valur</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <th scope="row">Username</th>
            <td>{this.state.userinfo.username}</td>
            </tr>
            <tr>
            <th scope="row">Name</th>
            <td>{this.state.userinfo.name}</td>
            </tr>
            <tr>
            <th scope="row">Email</th>
            <td>{this.state.userinfo.email}</td>
            </tr>

            </tbody>
            </table>
        </div>
        </div>
  
  );
}
}


export default UserProfile;