import React, {Component} from 'react';
import PropTypes from 'prop-types';

//todo add the wind name

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
    const convertedDay = new Date(date*1000);
    const currentDay = {};
    currentDay.year = convertedDay.getFullYear();
    currentDay.month = convertedDay.getMonth() + 1;
    currentDay.day = convertedDay.getDate();
    currentDay.hours = convertedDay.getHours();

    const iconPath = `http://openweathermap.org/img/w/${icon}.png`;

    return (
      <div>
        <p>{currentDay.day}/{currentDay.month}/{currentDay.year} - {currentDay.hours}:00</p>
        <img src={iconPath} alt=""/>
        <div>
          <span>{temp}ºC - {weather}</span>
          <span>{tempMin}ºC ~ {tempMax}ºC</span>
        </div>

        <span>{weatherDescription}</span>
        <span>Wind {windSpeed}km/h {windDirection}º</span>
      </div>
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
  windSpeed:PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired
};

export default Card;