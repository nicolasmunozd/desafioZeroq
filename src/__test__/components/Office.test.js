/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Office from '../../components/Office';

configure({ adapter: new Adapter() });

describe('<Office />', () => {
	test('Render del componente office offline', () => {
		const office = shallow(
			<Office name="Nombre oficina" waiting="10" elapsed="2:10" />,
		);
		expect(office.length).toEqual(1);
		expect(office.find('.box__detail--waiting-number').text()).toEqual('10');
		expect(office.find('.box__detail--elapsed-number').text()).toEqual('2:10');
		expect(office.find('.box__detail--waiting-number').text()).toEqual('10');
		expect(office.find('.box--disabled').length).toEqual(1);
		expect(office.find('.box__detail--disabled').length).toEqual(1);
	});

	test('Render del componente office online', () => {
		const office = shallow(
			<Office name="Nombre oficina" waiting="10" elapsed="2:10" online />,
		);
		expect(office.length).toEqual(1);
		expect(office.find('.box__detail--waiting-number').text()).toEqual('10');
		expect(office.find('.box__detail--elapsed-number').text()).toEqual('2:10');
		expect(office.find('.box__detail--waiting-number').text()).toEqual('10');
		expect(office.find('.box').length).toEqual(1);
		expect(office.find('.box__detail').length).toEqual(1);
	});
});
