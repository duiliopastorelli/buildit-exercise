import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

/**
 * This component has the responsibility to display the weather data in form
 * of a card.
 */
class Card extends Component {
  render() {
    const {
      date,
      temp,
      tempMin,
      tempMax,
      weather,
      weatherDescription,
      icon,
      windSpeed,
      windDirection
    } = this.props;

    //Obtains a Date object from the date provided by the API
    const convertedDay = new Date(date * 1000);
    const currentDay = {};
    currentDay.year = convertedDay.getFullYear();
    currentDay.month = convertedDay.getMonth() + 1;
    currentDay.day = convertedDay.getDate();
    currentDay.hours = convertedDay.getHours();

    //Define the icon path
    const iconPath = `http://openweathermap.org/img/w/${icon}.png`;

    return (
      <Paper className="card">
        <span className="card--date">
          {currentDay.day}/{currentDay.month}/{currentDay.year} - {currentDay.hours}:00
        </span>
        <div className="card--main-info">
          <img src={iconPath} alt={weatherDescription}/>
          <div className="card--temperatures">
            <span>{temp}ºC - {weather}</span>
            <span>{tempMin}ºC ~ {tempMax}ºC</span>
          </div>
        </div>
        <span className="card--weather-description">{weatherDescription}</span>
        <span className="card--wind">Wind {windSpeed}km/h @ {windDirection}º</span>
      </Paper>
    )
  }
}

Card.propTypes = {
  date: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
  tempMax: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired
};

export default Card;