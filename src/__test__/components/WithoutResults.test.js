/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WithoutResults from '../../components/WithoutResults';

configure({ adapter: new Adapter() });

describe('<WithoutResults />', () => {
	test('Render del componente WithoutResults', () => {
		const withoutResults = shallow(<WithoutResults />);
		expect(withoutResults.length).toEqual(1);
	});
});
