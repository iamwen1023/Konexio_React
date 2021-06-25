import React from "react";
import './App.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userlist:[],
            username: "",
            password:"",
            warningName: false,
            warningPassword: false,
        }
        this.checkLogin = this.checkLogin.bind(this)
        this.faireRedirection = this.faireRedirection.bind(this)
    }
    async componentDidMount(){
        try{
        const RESULT = await fetch("https://jsonplaceholder.typicode.com/users");
        const RESULT_JSON = await RESULT.json();
        RESULT_JSON.map(element => 
            this.setState({
                userlist:[...this.state.userlist,{username: element.username,id:element.id, password:element.address.city}]
            })    
        )
        console.log(this.state.userlist);
        }catch(error){
            console.error(error);
        }  
    }
    componentDidUpdate(prevProps, prevState){
        console.log("username", this.state.username);
        console.log("password", this.state.password);
    }
    faireRedirection=()=> {
        this.props.history.push("/userlist");
      }
    checkLogin(){
        let checekName = this.state.userlist.find(element=> element.username ===this.state.username);
        if (checekName === undefined)
            this.setState({warningName : true});
        let checekPassword = this.state.userlist.find(element=> element.password ===this.state.password);
        if (checekPassword === undefined)
            this.setState({warningPassword :true});
        if (checekName && checekPassword)
        {
            this.faireRedirection();
        }
    }
  render() {
  return (
        <div>
        <form >
        <h2 className="mb-3 d-flex justify-content-center">Login</h2>
            <div className="mb-3 d-flex justify-content-center">
                <input className="form-control form" type="text" placeholder="Username" onChange={(event)=>{this.setState({username : event.target.value})}}/>
            </div>
            {this.state.warningName? <p className="mb-3 d-flex justify-content-center">Username ou Password incorrect</p>: null}
            <div className=" d-flex justify-content-center mb-3">
                <input className="form-control form" type="text" placeholder="Password" onChange={(event)=>{this.setState({password : event.target.value})}} />
            </div>
            {this.state.warningPassword? <p className="mb-3 d-flex justify-content-center">Username ou Password incorrect</p>: null}
            <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={this.checkLogin}>Valider</button>
        </div>
        </form>
        </div>
  
  );
}
}

export default Login;