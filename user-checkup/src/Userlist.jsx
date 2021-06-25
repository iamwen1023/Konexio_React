import React from "react";
import Navigation from "./Navigation";
import './App.css';

class Userlist extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userlist:[],
        }
    }
    async componentDidMount(){
        try{
        const RESULT = await fetch("https://jsonplaceholder.typicode.com/users");
        const RESULT_JSON = await RESULT.json();
        RESULT_JSON.map(element => 
            this.setState({
                userlist:[...this.state.userlist,{username: element.username,id:element.id,name: element.name, email:element.email}]
            })    
        )
        console.log(this.state.userlist);
        }catch(error){
            console.error(error);
        }  
    }
  render() {
  return (
      <div>
        <Navigation />
        <div className="userlist">
            <h2>Userlist</h2>
            <table class="table">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
            {this.state.userlist.map((element, index) => <tr>
                <th key={index} scope="row">{element.id}</th>
                <td>{element.username}</td>
                <td><a href={`./userprofile/`+ element.id}>{element.name}</a></td>
                <td>{element.email}</td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
        </div>
  
  );
}
}

export default Userlist;