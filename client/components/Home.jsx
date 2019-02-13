import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        request.get('https://api.themoviedb.org/3/movie/popular?api_key=55cbe42df23eb1960075410f3958de2a&language=en-US&page=1')
        .then(res=>{
         console.log(res)
         this.setState({
             newMov : res.body
         })
        })
    
        
    }
        render(){
            return(
                
                <div>
               {console.log(this.state.newMov)}
                    
                        hi
                    </div>
                
            
                

              
            )
        
    }
}

export default Home