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
             
            <div className='row whitesplash'>
            <div className='col-md-3'>
           
            <img className='movieImageLarge' src= {`https://image.tmdb.org/t/p/w500${this.state.newMov.poster_path}`}></img>
            </div>
            <div className='col-md-9'>
            <h1>{this.state.newMov.title}</h1>
            <h5>Overview:</h5>
            <p>{this.state.newMov.overview}</p>
            <p>Release Date: {this.state.newMov.release_date}</p>
            <p>Runtime: {this.state.newMov.runtime} minutes</p>
            </div>
            </div>
            {console.log(this.props.match.params.id)}
        {this.state.ratings.map((item,i)=>{
            return(<div className='reviewDiv' key={i}>
                <h5>{item.name} says:</h5>
                <p>{item.review}</p>
                <h6>{item.rating} Stars</h6>
                
                </div>)
        })}
        </div>
    )
}




}
export default MovieById