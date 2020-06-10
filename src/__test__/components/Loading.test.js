/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '../../components/Loading';

configure({ adapter: new Adapter() });

describe('<Loading />', () => {
	test('Render del componente Loading', () => {
		const loading = shallow(<Loading />);
		expect(loading.length).toEqual(1);
	});
});
