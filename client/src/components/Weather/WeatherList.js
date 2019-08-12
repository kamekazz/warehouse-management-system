import React, {Component} from 'react'
import Moment from 'moment';


class WeatherList extends Component {


  render() {
    return (
      <div className="text-muted mb-4 pb-1">
        {
          this.props.weather.map((data, index) => <DayWeather dayData={data} key={index}/>)
        }
      </div>
    )
  }
}

const DayWeather = ({dayData}) => {
  const temp = dayData.main.temp;
  const day = dayData.dt_txt;
  const iconId = dayData.weather[0].id;
  Moment.locale('en');

  let bgColorClass = 'list-weather-widget ';
  // Set the background colour based on the temperature
  if (temp >= 30) {
    bgColorClass += 'very-warm';
  }
  else if (temp > 20 && temp < 30) {
    bgColorClass += 'warm';
  }
  else if (temp > 10 && temp < 20) {
    bgColorClass += 'normal';
  }
  else if (temp > 0 && temp < 10) {
    bgColorClass += 'cold';
  }
  else if (temp <= 0) {
    bgColorClass += 'very-cold';
  }

  return (
    <div className={bgColorClass + " mb-4 mb-md-3 row"}>
      <div className="col-5">
        <p className="jr-fs-15 mb-0">{Moment(day).format('ddd d MMM')}</p>
      </div>
      <div className="col-3">
        <i className={"text-black jr-fs-xl wi wi-owm-" + iconId}/>
      </div>
      <div className="col-4">
        <p className="mb-0">{temp.toFixed(1)} °C</p>
      </div>

    </div>
  )
};

export default WeatherList
