import React from 'react'
import MovieSingle from './MovieSingle'
import {getMovies} from '../api/index'

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movies:[]
        }
        this.fetchMovies = this.fetchMovies.bind(this)
    }
    componentDidMount(){
      
        this.fetchMovies()
      }
      fetchMovies() {
        return getMovies()
        .then(movies =>{
            this.setState({movies: movies})
        })
    }

    render(){
        return(
        
            this.state.movies.map((movie)=>{
                return <MovieSingle mov={movie}/>
            })
    
        )
    }

}
export default Movie