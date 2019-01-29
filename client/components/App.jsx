import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Monkeys from './Monkeys'
import Home from './Home'
import Bananas from './Bananas'
import Nav from './Nav'

const data = ['bob', 'alice', 'cornelius', 'george' ]


function clickLink(evt) {
  console.log('clicked')
  evt.preventDefault()
}

function rightclick(evt) {
  alert('freedom!')
  evt.preventDefault()
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      title: 'hi monkeys',
      klass: 'bananas',
      showMonkeys: true
    }
  }
  toggle (evt) {
    this.setState({showMonkeys: !this.state.showMonkeys})
  }
  render() {
    const {klass, title, showMonkeys} = this.state

    return (
      <Router>
        <div className={klass}>
          <a href='/404' onClick={clickLink} onContextMenu={rightclick}>Freedom</a>
          <Route path='/' component={Nav} />
          <h1>{title}</h1>
          <button onClick={this.toggle.bind(this)}>Toggle</button>
          {showMonkeys ? <Monkeys names={data} /> : '' }
          <Route exact path='/' component={Home} />
          <Route path='/bananas' component={Bananas} />
        </div>
      </Router>
    )
  }
}

export default App

