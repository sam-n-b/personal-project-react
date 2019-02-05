import React from 'react'
import { getDefinition } from '../api/urban';

class Urban extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      result: null
    }
    this.loadDefinition=this.loadDefinition.bind(this)
  }

  loadDefinition(){
    return getDefinition()
    .then((data) => {this.setState({result:data})})
  }

  render () {
    return(
    <div>
      {this.state.result && (
        <div>
          <h2>{this.state.result.word}</h2>
          <p>Definition: {this.state.result.definition}</p>
          <p>Example: {this.state.result.example}</p>
        </div>
        )}
      <button onClick={this.loadDefinition}>Hello</button>
    </div>
    )
  }
}

export default Urban