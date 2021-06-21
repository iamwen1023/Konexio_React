import React from 'react'
import Card from './Card';
const API_KEY = 'b8e16ff25f44004fe2ab5dedc9e0453e'


class Weekly extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies:[],
        }
    }
    async componentDidMount(){
        try{
        const URL = "https://api.themoviedb.org/3/trending/movie/week?&api_key=" +API_KEY;
        const RESULT = await fetch(URL);
        const RESULT_JSON = await RESULT.json();
        RESULT_JSON.results.forEach(element => 
            this.setState({
                movies:[...this.state.movies,{name: element.original_title,resume:element.overview, path_photo:element.poster_path}]
            })    
        )
        //console.log(this.state.movies);
        }catch(error){
            console.error(error);
        }
        
    }
    render(){
      return (
        <div>
             <div className="row">
            {this.state.movies.map(e => 
            <div className="col-6">
            <Card title={e.name} resume={e.resume} path_photo={e.path_photo}/>
            </div>
            )}
            </div>
        </div>
      )
    }
  }
  export default Weekly;
  
  