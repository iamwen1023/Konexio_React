import React from 'react'
import Card from './Card';
import '../App.css';
const API_KEY = 'b8e16ff25f44004fe2ab5dedc9e0453e'

class Favorites extends React.Component {
    constructor(props){
        super(props)
        const favorites_P = localStorage.favoritesPopular? JSON.parse(localStorage.favoritesPopular): []
        const favorites_Weekly = localStorage.favoritesWeekly? JSON.parse(localStorage.favoritesWeekly):[]
        this.state = {
            favorites_P,
            favorites_Weekly,
            listMovie_P:[],
            listMovie_Weekly:[],
        }
    }
    componentDidMount(){
        const URL = "https://api.themoviedb.org/3/movie/"
        Promise.all(this.state.favorites_P.map(element => fetch (URL+ element + "?api_key="+ API_KEY)))
        .then(response =>Promise.all(response.map(r_json => r_json.json())))
        .then(res =>{
            res.map(element =>
                this.setState({
                    listMovie_P:[...this.state.listMovie_P,{name: element.original_title,resume:element.overview, path_photo:element.poster_path }]
            }))
            })
        //.then(res => console.log("listmovie",this.state.listMovie))
        .catch(error => console.error(error))
        Promise.all(this.state.favorites_Weekly.map(element => fetch (URL+ element + "?api_key="+ API_KEY)))
        .then(response =>Promise.all(response.map(r_json => r_json.json())))
        .then(res =>{
            res.map(element =>
                this.setState({
                    listMovie_Weekly:[...this.state.listMovie_Weekly,{name: element.original_title,resume:element.overview, path_photo:element.poster_path }]
            }))
            })
        //.then(res => console.log("listmovie",this.state.listMovie))
        .catch(error => console.error(error))
    }
    renderInfo(){
        console.log("this", this.state)
        if (this.state.listMovie_Weekly.length && this.state.listMovie_P.length){
        return (
        <div>
            <div className="row">
             <h2>Selected from Popular Battle</h2>
            {this.state.listMovie_P.map((e, index) => 
            <div className="col-6">
            <Card key={index} title={e.name} resume={e.resume} path_photo={e.path_photo}/>
            </div>
            )}
            </div>
            <div className="row">
             <h2>Selected from Weekly Battle</h2>
            {this.state.listMovie_Weekly.map((e, index) => 
            <div className="col-6">
            <Card key={index} title={e.name} resume={e.resume} path_photo={e.path_photo}/>
            </div>
            )}
        </div>
        </div>
        )}
        else {
            console.log("here")
            return <h2>you have not create your favorite list</h2>
        }
    }
    render(){
      return (
        <div>
        {this.renderInfo()}
        </div>
      )
    }
  }
  export default Favorites;