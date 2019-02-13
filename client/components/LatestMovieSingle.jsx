import React from 'react'
import {Link} from 'react-router-dom'

const LatestMovieSingle = (props) => {
    return (
        
        <div className='col-md-3'>
            <h3 className='movie-title'>{props.mov.title}</h3>
            <Link to={'/movie/'+props.mov.id}><img className='movie-image' src={'https://image.tmdb.org/t/p/w200/'+props.mov.poster_path}></img></Link>
        </div>
    )
  
  }
  

export default LatestMovieSingle