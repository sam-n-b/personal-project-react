import React from 'react'
import {Link} from 'react-router-dom'

const MovieSingle = (props) => {
    return (
        
        <div className='col-md-3 movDivs'>
            <h3 className='movie-title'>{props.mov.title}</h3>
            <Link to={'/movie/'+props.mov.movieId}><img className='movie-image' src={props.mov.image}></img></Link>
        </div>
    )
  
  }
  

export default MovieSingle