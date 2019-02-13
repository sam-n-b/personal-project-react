import React from 'react'
import request from 'superagent'

class MovieById extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movDetails: {}
        }

    }
    componentDidMount(){
        const apiKey = '55cbe42df23eb1960075410f3958de2a'
        // request.get('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'?api_key='+apiKey+'&language=en-US')
        request.get('https://api.themoviedb.org/3/movie/347031?api_key=55cbe42df23eb1960075410f3958de2a&language=en-US')
        .then(res=>{
         this.setState({
             movDetails : res.body.results
         })
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