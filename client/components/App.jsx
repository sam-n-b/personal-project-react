import React from 'react'
import Monkeys from './Monkeys'

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
      <div className={klass}>
        <a href='/404' onClick={clickLink} onContextMenu={rightclick}>Freedom</a>
        <h1>{title}</h1>
        <button onClick={this.toggle.bind(this)}>Toggle</button>
        {showMonkeys ? <Monkeys names={data} /> : '' }
      </div>
    )
  }
}

export default App

