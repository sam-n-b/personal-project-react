import React from 'react'
import request from 'superagent'
import {getMovieRatings} from '../api/index'


class MovieById extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ratings:[],
            newMov:[]

        }
        this.fetchMovieRatings = this.fetchMovieRatings.bind(this)

    }
    componentDidMount(){
        this.fetchMovieRatings()
        var movId = this.props.match.params.id
        var apiKey = '55cbe42df23eb1960075410f3958de2a'
        request.get(`https://api.themoviedb.org/3/movie/${movId}?api_key=${apiKey}&language=en-US`
            )
        .then(res=>{
         this.setState({
             newMov : res.body
         })
        })
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
            <h1>{this.state.newMov.title}</h1>
            <img src= {`https://image.tmdb.org/t/p/w500${this.state.newMov.poster_path}`}></img>
            <p>{this.state.newMov.overview}</p>
            {console.log(this.props.match.params.id)}
        {this.state.ratings.map( item=>{
            return(<div>
                <p>{item.name} says:</p>
                <p>{item.review}</p>
                <p>{item.rating} Stars</p>
                
                <br></br>
                </div>)
        })}
        </div>
    )
}




}
export default MovieById