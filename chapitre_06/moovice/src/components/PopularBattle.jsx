import React from 'react'
import Card from './Card';
import '../App.css';
const API_KEY = 'b8e16ff25f44004fe2ab5dedc9e0453e'

class PopularBattle extends React.Component {
  
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
        //localStorage.clear()
        localStorage.removeItem('favoritesPopular')
    }
    async showOnlyTwo(){
        try{
            const URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" +API_KEY;
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
            if (!localStorage.favoritesPopular)
                localStorage.setItem("favoritesPopular", JSON.stringify([this.state.movies[index].id]))
            else{   
                temp = [...JSON.parse(localStorage.favoritesPopular),this.state.movies[index].id]
                localStorage.setItem("favoritesPopular", JSON.stringify(temp))
            }
            console.log("localStorage.favoritesPopular", localStorage.favoritesPopular)
    }
    nextTwo(index){
        this.setState({
            currentBattle: this.state.currentBattle+2,
        })
        if (this.state.currentBattle === 18) {
            alert('Vous avez parcouru tous les films !')
        }
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
        }else{
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
  export default PopularBattle;
  