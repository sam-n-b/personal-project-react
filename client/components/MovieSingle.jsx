import React from 'react'

const MovieSingle = (props) => {
    return (
        
        <div className='col-md-3'>
            <h3 className='movie-title'>{props.mov.title}</h3>
            <img className='movie-image' src={props.mov.image}></img>
        </div>
    )
  
  }
  

export default MovieSingle