/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../components/Home';
import HomeMock from '../../__mocks__/HomeMock';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
	test('Render del componente Home', () => {
		const home = shallow(<Home dataFilter={HomeMock} />);
		expect(home.length).toEqual(1);
		expect(home.find('.boxs').length).toEqual(1);
	});
});
