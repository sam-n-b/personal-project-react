import React from 'react'

class Urban extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return(
    <div>
      {this.props.name && (
        <div>
          <h2>{this.props.name.word}</h2>
          <p>Definition: {this.props.name.definition}</p>
          <p>Example: {this.props.name.example}</p>
        </div>
        )}
     
    </div>
    )
  }
}

export default Urban