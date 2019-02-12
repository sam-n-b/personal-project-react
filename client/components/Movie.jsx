import React from 'react'
import MovieSingle from './MovieSingle'

class Movie extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        
            this.props.movies.map((movie)=>{
                return <p>{movie.title}</p>
            })
    
        )
    }

}
export default Movie