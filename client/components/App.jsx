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
import MovieById from './MovieById';

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
      <Route path='/home' component={Home}/>
      <Route path='/user' component={User}/>
      <div className = 'row'>
      <Route path='/movies' component={Movie}/>
      </div>
      <Route path='/menu' component={Menu}/>
      <Route path='/movie/:id' component={MovieById} />
      </div>
      
    </Router>
    </div>
  )
}
}
export default App

