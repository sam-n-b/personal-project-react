import React from 'react'

import LoremDicksum from '../api/loremrick'
import Insult from '../api/insult'

export class LoremRicksum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: undefined,
      insult: undefined
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    LoremDicksum()
      .then((morty) => {
        this.setState({
          quote: JSON.parse(morty)
        })
      })
      .then(Insult()
        .then((result) => {
          this.setState({
            insult: result
          })
        })

      )
  }

  handleClick(e) {
    console.log(e)
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render() {



    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="grid-item-rick" onClick={this.handleClick}><img src="https://cdn.vox-cdn.com/thumbor/1kKyzwmocR6pu9ijSIl_l1XP0PY=/0x0:1280x720/1200x675/filters:focal(470x259:674x463)/cdn.vox-cdn.com/uploads/chorus_image/image/58089103/r_m_sauce.0.jpg" /></div>
          <div className="grid-item-insult" onClick={this.handleClick()}></div>
          {/* {this.state.quote && <p>{this.state.quote["data"]}</p>}
          {this.state.insult && <p>{this.state.insult}</p>} */}
        </div>
      </React.Fragment>
    )
  }

}