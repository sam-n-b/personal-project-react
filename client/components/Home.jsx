import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=55cbe42df23eb1960075410f3958de2a&language=en-US&page=1')
        .then(results=>{
         return results.json()
        })
        .then(res=>{this.setState({newMov: res})})
    
        
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