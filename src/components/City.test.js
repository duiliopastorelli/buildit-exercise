import React from 'react';
import City from './City';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {props} from './__mocks__/City';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

describe('City Component', () => {

  it('renders the City component', () => {
    const component = shallow(<City {...props} />);
    expect(component.find('CityDialog').length).toBe(1);
    expect(component.find('Card').length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<City {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});