import React from 'react'
import Monkeys from './Monkeys'

const data = ['bob', 'alice', 'cornelius', 'george' ]

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
    console.log(evt.target)
    this.setState({showMonkeys: !this.state.showMonkeys})
  }
  render() {
    const {klass, title, showMonkeys} = this.state

    return (
      <div className={klass}>
        <h1>{title}</h1>
        <button onClick={this.toggle.bind(this)}>Toggle</button>
        {showMonkeys ? <Monkeys names={data} /> : '' }
      </div>
    )
  }
}

export default App

