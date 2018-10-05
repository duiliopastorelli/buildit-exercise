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

    const component = shallow(<App/>);
    expect(component).to.have.lengthOf(1);
  });

  it('renders the City Component', () => {
    //localStorage should be empty
    expect(Object.keys(localStorage.__STORE__).length).to.equal(0);

    //Provides a mock for the fetchForecasts API call
    fetch.mockResponseOnce(JSON.stringify(fullWeatherAPIResponse));
    const component = shallow(<App/>);

    expect(component.find("City").length).to.equal(1);
  });

  it('checks if the State is updated with the fetched forecasts', done => {
    //localStorage should be empty
    expect(Object.keys(localStorage.__STORE__).length).to.equal(0);

    //Provides a mock for the fetchForecasts API call
    fetch.mockResponseOnce(JSON.stringify(fullWeatherAPIResponse));
    const component = shallow(<App/>);

    //Assure that the initial state is reset to the default values
    expect(component.instance().state).to.be.deep.equal(defaultAppState);

    setTimeout(() => {
      component.update();

      expect(component.instance().state).to.be.deep.equal({
        _isMounted:true,
        forecasts:fullWeatherAPIResponse
      });
      done();
    });
  })

});

