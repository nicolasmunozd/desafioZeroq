/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../components/Search';

configure({ adapter: new Adapter() });

describe('<Search />', () => {
	test('Render del componente Search', () => {
		const search = shallow(<Search />);
		expect(search.length).toEqual(1);
	});
});
