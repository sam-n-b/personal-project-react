import React from "react"
import { getData } from "../api/nasa"

class Nasa extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      picOfDay: {}
    }

    this.loadNasaData = this.loadNasaData.bind(this)
  }

  loadNasaData() {
    getData()
      .then(picOfDay => {
        this.setState({ picOfDay: picOfDay })
      })
  }

  componentDidMount() {
    this.loadNasaData()
  }

  render() {

    const keys = Object.keys(this.state.picOfDay)

    return (
      <div>
        <h2>Nasa-Picture Of The Day</h2>
        {this.state.picOfDay && (
          <ul>
            {keys.map((key) => (<li key={key}> {key} - {this.state.picOfDay[key]}</li>))}
          </ul>
        )}

        <div className="video">
          <iframe width="560" height="315" src={this.state.picOfDay.url}> </iframe>
        </div>

        <button onClick={this.loadNasaData}> refresh </button>
      </div>
    )
  }



}


export default Nasa