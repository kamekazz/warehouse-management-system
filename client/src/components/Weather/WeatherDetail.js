import React, {Component} from 'react'
import {weatherData} from './weatherData';
import WeatherList from './WeatherList';
import Button from '@material-ui/core/Button';

class WeatherDetail extends Component {

  render() {
    const {city, list} = weatherData;
    if (!city) {
      return <div>Loading...</div>
    }

    // TODO: refactoring this code...

    let bgColorClass = 'detail-weather-widget ';
    // Set the background colour based on the temperature
    if (list[0].main.temp.toFixed(1) >= 30) {
      bgColorClass += 'very-warm';
    }
    else if (list[0].main.temp.toFixed(1) > 20 && list[0].main.temp.toFixed(1) < 30) {
      bgColorClass += 'warm';
    }
    else if (list[0].main.temp.toFixed(1) > 10 && list[0].main.temp.toFixed(1) < 20) {
      bgColorClass += 'normal';
    }
    else if (list[0].main.temp.toFixed(1) > 0 && list[0].main.temp.toFixed(1) < 10) {
      bgColorClass += 'cold';
    }
    else if (list[0].main.temp.toFixed(1) <= 0) {
      bgColorClass += 'very-cold';
    }

    return (
      <div className={bgColorClass}>
        <div className="jr-card-header text-white mt-0">
          <h2 className="card-heading">{city.name}</h2>
          <p className="sub-heading">{city.dateTime}</p>

          <div className="temp-section">
            <h2 className="temp-point">{list[0].main.temp.toFixed(1)}
              <small><sup><sup>°</sup>C</sup></small>
            </h2>
            <div className="pl-2 pl-md-4">
              <i className={"detail-icon wi wi-owm-" + list[0].weather[0].id}/>
            </div>
          </div>
        </div>

        <div className="jr-card-body">
          <WeatherList weather={list}/>
          <Button variant="contained" color="primary" className="jr-btn jr-btn-sm text-uppercase text-white">full
            report</Button>
        </div>
      </div>
    )
  }
}

export default WeatherDetail;
