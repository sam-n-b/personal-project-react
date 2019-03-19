import React from 'react'

function Head(){
return(
    <React.Fragment>
    <div className='row'>
    
    <div className='col-md-6'>
        <h1 className='mainTitle'>The Movie Logger</h1>
    </div>
    <div className='col-md-6'><img className = 'tmdbLogo' src='./images/tmdbLong.png'></img></div>
 
    </div>
    <hr className='linebr'></hr>
    <div>
    </div>
    </React.Fragment>
 
)
}

export default Head