import React from 'react'
import request from 'superagent'
import {getMovieRatings} from '../api/index'


class MovieById extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            ratings:[]
        }
        this.fetchMovieRatings = this.fetchMovieRatings.bind(this)

    }
    componentDidMount(){
        this.fetchMovieRatings()
    }
    
    fetchMovieRatings(){
        var num = this.props.match.params.id
        return getMovieRatings(num)
        .then(ratings =>{
            this.setState({ratings: ratings})
        })
    }

render(){
    return(
        <div>
            {console.log(this.props.match.params.id)}
        <h1>movieById</h1>
        </div>
    )
}




}
export default MovieById