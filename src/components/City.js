import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

//todo make offset and precision amendable by the user

/**
 * This component has the responsibility of handle all the forecast data.
 * It shows a "loading" message for keep updated the user about what is
 * happening behind the scenes.
 * When data are available it pass them to the children Card components.
 */
class City extends Component {
  render() {
    const {cityName, countryName, forecastedDays} = this.props;

    return (
      <div>
        {/* Displays a loading message if data are not available yet */}
        {cityName ?
          <h1>{cityName} ({countryName})</h1> :
          <p>Loading</p>}

        <div className="cards--container">
          {forecastedDays.map((day, index) => {
            //Filter out the forecasts that don't respect the offset and the
            // precision chosen
            if ((index - 2) % 8 === 0) {
              return <Card key={day.dt}
                           date={day.dt}
                           temp={day.main.temp}
                           tempMin={day.main.temp_min}
                           tempMax={day.main.temp_max}
                           weather={day.weather[0].main}
                           weatherDescription={day.weather[0].description}
                           icon={day.weather[0].icon}
                           windSpeed={day.wind.speed}
                           windDirection={day.wind.deg}
              />
            }
          })}
        </div>
      </div>
    )
  }
}

City.propTypes = {
  cityName: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  forecastedDays: PropTypes.array.isRequired
};

export default City;