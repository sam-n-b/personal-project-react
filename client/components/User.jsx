import React from 'react'
import {getUsers} from '../api/index'

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         
        }
    }
    render(){
        return(
            <h1>{this.props.user.name}</h1>
        )
    }
}

export default User