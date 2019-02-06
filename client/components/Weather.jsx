import React from 'react'
import { getWeather } from "../api/weather"

class Weather extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todaysWeather: {}
    }
    this.loadWeather = this.loadWeather.bind(this)
  }


  loadWeather() {
    // console.log('cdm lw')
    getWeather()
      .then(todaysWeather => {
        // console.log('weather')
        this.setState({ todaysWeather: todaysWeather })
      })
  }

  componentDidMount() {
    this.loadWeather()
  }


  render() {

    const keys = Object.keys(this.state.todaysWeather)

    return (
      <div>
        <h2>Weather Today in Wellington</h2>
        {this.state.todaysWeather && (
          <ul>
            {keys.map((key) => (<li key={key}> {key} - {this.state.todaysWeather[key]}</li>))}
          </ul>
        )}

      </div>
    )
  }


}


export default Weather