import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


import Movie from './Movie'
import Menu from './Menu'
import User from './User'
import Home from './Home'
import {getUsers} from '../api/index'
import {getMovies} from '../api/index'

class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      movies:[]
    }
    this.fetchUsers = this.fetchUsers.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
  }
  componentDidMount(){
    this.fetchUsers()
    this.fetchMovies()
  }
  
  fetchUsers() {
        return getUsers()
        .then(users =>{
            this.setState({users: users})
        })
    }

    fetchMovies() {
      return getMovies()
      .then(movies =>{
          this.setState({movies: movies})
      })
  }
  render() {
  return (
    <div>
    <Router>
      <div className='container'>
      <Menu/>
      <h1>Hello Movies!</h1>
      <Route exact path='/' component={Home}/>
      <Route path='/user' component={User}/>
      <Route path='/movie' component={Movie}/>
      <Route path='/menu' component={Menu}/>
      {this.state.users.map(user => <User user={user}/>)}
      </div>
    </Router>
    </div>
  )
}
}
export default App

