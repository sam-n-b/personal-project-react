import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Movie from './Movie'

const App = () => {
  return (
    <div>
    <h1>React development has begun!</h1>
    <Movie propmovie = 'End of the tour'/>
    
    <Router>
      <Route path='/movie' component={Movie}/>
    </Router>
    </div>
  )
}

export default App

