import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

import LatestMovieSingle from './LatestMovieSingle'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newMov: []
        }
    }
    componentDidMount(){
        request.get('https://api.themoviedb.org/3/movie/popular?api_key=55cbe42df23eb1960075410f3958de2a&language=en-US&page=1')
        .then(res=>{
         this.setState({
             newMov : res.body.results
         })
        })
    
        
    }
        render(){
            return(
               <div className='row'>
                   {this.state.newMov.map((title,i)=>{
                       return(
                           <LatestMovieSingle mov={title} key={i}/>
                       )
                   })}
               </div>
                
                
            )
    }
}

export default Home