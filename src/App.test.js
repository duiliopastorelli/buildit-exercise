import React from 'react';
import App from './App';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';
import {fullWeatherAPIResponse, defaultAppState} from './mocks/mocks'

configure({adapter: new Adapter()});

describe('<App />', () => {

  beforeEach(() => {
    fetch.resetMocks();
    localStorage.clear();
  });

  it('renders the App Component', () => {
    //Provides a mock for the fetchForecasts API call
    fetch.mockResponseOnce(JSON.stringify(fullWeatherAPIResponse));

    //Shallow render the component
    const component = shallow(<App/>);

    expect(component).to.have.lengthOf(1);
  });

  it('renders the City Component', () => {
    //localStorage should be empty
    expect(Object.keys(localStorage.__STORE__).length).to.equal(0);

    //Provides a mock for the fetchForecasts API call
    fetch.mockResponseOnce(JSON.stringify(fullWeatherAPIResponse));

    //Shallow render the component
    const component = shallow(<App/>);

    expect(component.find("City").length).to.equal(1);
  });

  it('the State is updated with the fetched forecasts', done => {
    //localStorage should be empty
    expect(Object.keys(localStorage.__STORE__).length).to.equal(0);

    //Provides a mock for the fetchForecasts API call
    fetch.mockResponseOnce(JSON.stringify(fullWeatherAPIResponse));

    //Shallow render the component
    const component = shallow(<App/>);

    //Assure that the initial state is reset to the default values
    expect(component.instance().state).to.be.deep.equal(defaultAppState);

    setTimeout(() => {
      component.update();

      expect(component.instance().state).to.be.deep.equal({
        _isMounted: true,
        forecasts: fullWeatherAPIResponse
      });
      done();
    });
  });

  it('Check if the forecasts are updated when the current date is older than ' +
    'the 1st forecast date', done => {

    //Amend the date to be older than the current time
    localStorage.__STORE__.date = new Date().getTime() / 1000 - 10;

    //Provides a mock for the fetchForecasts API call
    fetch.mockResponseOnce(JSON.stringify(fullWeatherAPIResponse));

    //Shallow render the component
    const component = shallow(<App/>);

    setTimeout(() => {
      expect(localStorage.__STORE__.forecasts).to.deep.equal(
        JSON.stringify(fullWeatherAPIResponse)
      );
      done();
    })
  });

  it('Check if the forecasts are not updated when the current date is newer' +
    ' than the 1st forecast date', done => {

    //Create a new date for the localStorage that is older than the current time
    const newerDate = new Date().getTime() / 1000 + 10;

    //Populate the localStorage
    localStorage.__STORE__.forecasts = JSON.stringify(fullWeatherAPIResponse);

    //Override the date to assure that it is not coming from the mock
    localStorage.__STORE__.date = newerDate;

    //Provides a mock for the fetchForecasts API call
    fetch.mockResponseOnce(JSON.stringify(fullWeatherAPIResponse));

    //Shallow render the component
    const component = shallow(<App/>);

    setTimeout(() => {
      //If the date is the same as the override it means that the data have
      // not been fetched
      expect(localStorage.__STORE__.date).to.deep.equal(newerDate);
      done();
    })
  })
});

