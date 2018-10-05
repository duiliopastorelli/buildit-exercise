import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';
import {fullWeatherAPIResponse} from './mocks/mocks'

configure({adapter: new Adapter()});

describe('<App />', () => {

  it('renders <App/> without crashing', () => {
    beforeEach(() => {
      fetch.resetMocks()
    });

    //Provides a mock for the fetchForecasts API call
    fetch.mockResponseOnce(JSON.stringify(fullWeatherAPIResponse));

    const wrapper = shallow(<App/>);
    expect(wrapper).to.have.lengthOf(1);
  });

});

