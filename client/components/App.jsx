import React from 'react'
import Urban from './Urban' 
import { getDefinition } from '../api/urban';



class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name : null
    }

    this.handleChange = this.handleChange.bind(this)
    this.loadDefinition=this.loadDefinition.bind(this)
  }


  handleChange(event){
    this.setState({ name: event.target.value })
  }


  loadDefinition(){
    return getDefinition(this.state.name)
    .then((data) => {this.setState({name:data})})
  }


  render(){
  return (
    <React.Fragment>
    <Urban name={this.state.name} />
    <form onSubmit={event => event.preventDefault()}>
       <label><input type="text" name="text" onChange={this.handleChange}/></label>
       <button onClick={this.loadDefinition}>Submit</button>
    </form>
    </React.Fragment>
  )
  }
}

export default App

