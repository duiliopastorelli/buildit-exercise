import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CityDialog from "./CityDialog";

//todo make offset and precision amendable by the user

/**
 * This component has the responsibility of handle all the forecast data.
 * It shows a "loading" message for keep updated the user about what is
 * happening behind the scenes.
 * When data are available it pass them to the children Card components.
 */
class City extends Component {
  render() {
    const {cityName, countryName, forecastedDays, fetchNewCity} = this.props;

    return (
      <div>
        {/* Displays a loading message if data are not available yet */}
        {cityName ?
          <h1>{cityName} ({countryName})</h1> :
          <p>Loading</p>}


          {/* Displays a button that opens a dialog where the visitor can
          change the current city */}
        {cityName &&
        <CityDialog
          currentCity={cityName}
          fetchNewCity={fetchNewCity}
        />
        }

        {/* Displays the forecasts if available.
        The offset indicates how far in the future the 1st forecast has to
         be intended as "valuable" (2 means 6h in the future).
         The precision indicates how many forecasts to consider (8 means 1 a
          day */}
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
            } else {
              return null
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
  forecastedDays: PropTypes.array.isRequired,
  fetchNewCity: PropTypes.func.isRequired,
};

export default City;