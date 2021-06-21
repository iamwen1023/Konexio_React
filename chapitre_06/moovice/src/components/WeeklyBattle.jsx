import React from 'react'
import Card from './Card';
import '../App.css';
const API_KEY = 'b8e16ff25f44004fe2ab5dedc9e0453e'

class WeeklyBattle extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            movies:[],
            currentBattle : 0,

            //favorites:[],
        }
        this.showOnlyTwo = this.showOnlyTwo.bind(this)
        this.nextTwo = this.nextTwo.bind(this)
        this.addFavorite = this.addFavorite.bind(this)
    }
    async componentDidMount(){
        this.showOnlyTwo();
        localStorage.removeItem('favoritesWeekly')
    }
    async showOnlyTwo(){
        try{
            const URL = "https://api.themoviedb.org/3/trending/movie/week?&api_key=" +API_KEY;
            const RESULT = await fetch(URL);
            const RESULT_JSON = await RESULT.json();
            RESULT_JSON.results.forEach(element => 
                this.setState({
                    movies:[...this.state.movies,{name:element.original_title,resume:element.overview, path_photo:element.poster_path, id: element.id}]   
                })    
            )
            //console.log("this.state.movies", this.state.movies);
            }catch(error){
                console.error(error);
            }
    }
    addFavorite(index){
            let temp = [];
            if (!localStorage.favoritesWeekly)
                localStorage.setItem("favoritesWeekly", JSON.stringify([this.state.movies[index].id]))
            else{   
                temp = [...JSON.parse(localStorage.favoritesWeekly),this.state.movies[index].id]
                localStorage.setItem("favoritesWeekly", JSON.stringify(temp))
            }
            console.log("localStorage.favoritesWeekly", localStorage.favoritesWeekly)
    }
    nextTwo(index){
        this.setState({
            currentBattle: this.state.currentBattle+2,
        })
        this.addFavorite(index);
    }
   
    renderInfo(){
        if (this.state.movies[this.state.currentBattle] && this.state.movies[this.state.currentBattle + 1]){
            return(
                <div className="row">
                    <div className="col-6">
                <Card id={this.state.currentBattle} title={this.state.movies[this.state.currentBattle].name} resume={this.state.movies[this.state.currentBattle].resume} path_photo={this.state.movies[this.state.currentBattle].path_photo} getNextTwo={this.nextTwo}/>
                </div>
                <div className="col-6">
                <Card id={this.state.currentBattle + 1}title={this.state.movies[this.state.currentBattle + 1].name} resume={this.state.movies[this.state.currentBattle + 1].resume} path_photo={this.state.movies[this.state.currentBattle + 1].path_photo} getNextTwo={this.nextTwo}/>
                </div>
                </div>
            )
        }else
        {
            console.log("here")
            return (
              <h2>Vous avez parcouru tous les films !</h2>
             )
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
  export default WeeklyBattle;
  