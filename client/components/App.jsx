import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


import Movie from './Movie'
import Menu from './Menu'
import User from './User'

const App = () => {
  return (
    <div>
    <Router>
      <div>
      <h1>React development has begun!</h1>
      <Menu/>
      <Route path='/user' component={User}/>
      <Route path='/movie' component={Movie}/>
      <Route path='/menu' component={Menu}/>
      
      </div>
    </Router>
    </div>
  )
}

export default App

