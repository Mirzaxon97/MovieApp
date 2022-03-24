import React from "react";
import Film from './Film';
import Loader from './Loader'
import Search from "./Search";

export default class MainApp extends React.Component{

    state={
        movie:[]
    }

    componentDidMount(){
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=77d01f6c&s=spider')

        .then(response=>response.json())
        .then(result=>this.setState({movie:result.Search}))
    }

    getMovies=(txt)=>{
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=77d01f6c&s=${txt}`)

        .then(response=>response.json())
        .then(result=>this.setState({movie:result.Search}))  
    }



render(){
    
    return(
        <div className="main">
            <Search getMovies={this.getMovies}/>
            {this.state.movie.length ? <Film movie={this.state.movie}/> : <Loader/> }
  
        
        </div>
    )
    }

}
