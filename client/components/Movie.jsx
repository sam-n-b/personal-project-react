import React from 'react'

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movie: 'Titanic',
            year: 1997
        }
    }
    render(){
        return(
            <div>
                MOVIE PAGE!
            </div>
        )
    }
}

export default Movie