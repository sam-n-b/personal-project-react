import React from 'react'

class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movie: 'Titanic',
            year: 1997,
            image: './images/titanic.jpg'
        }
    }
    render(){
        return(
            <div>
                MOVIE PAGE!
                <h1>{this.state.movie}</h1>
                <h2>{this.props.propmovie}</h2>
            </div>
        )
    }
}

export default Movie