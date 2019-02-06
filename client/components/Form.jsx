import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

  
  }

  render(){
    return (
      <form>
       <label><input type="text" name="text"/></label>
       <button>Submit</button>
      </form>
    )
  } 
}

export default Form