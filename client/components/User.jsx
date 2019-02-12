import React from 'react'
import {getUsers} from '../api/index'
import {Link} from 'react-router-dom'

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         users: []
        }
        this.fetchUsers = this.fetchUsers.bind(this)
  }
  componentDidMount(){
    this.fetchUsers()
  
  }
  
  fetchUsers() {
        return getUsers()
        .then(users =>{
            this.setState({users: users})
        })
    }
    
    render(){
        return(
            this.state.users.map((name, i)=>{
               return <Link to={'/user/'+name.id}><h1 key={i}>{name.name}</h1></Link>
            })
        )
    }
}

export default User