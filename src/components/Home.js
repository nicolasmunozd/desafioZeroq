/* eslint-disable react/prop-types */
import React from 'react';
import Office from './Office';

const Home = (props) => {
	const { dataFilter } = props;

	const lineCalc = (elapsedOffice) => {
		// const second = 0;
		let minute = 0;
		let hour = 0;
		let elapsedTotal = elapsedOffice;

		hour = Math.floor(elapsedTotal / 3600);
		if (hour > 0) {
			elapsedTotal -= hour * 3600;
			minute = Math.floor(elapsedTotal / 60);
		} else {
			hour = 0;
			minute = Math.floor(elapsedTotal / 60);
		}

		if (minute < 10) {
			minute = `0${minute}`;
		}

		return `${hour}:${minute}`;
	};

	if (dataFilter) {
		return (
			<div className="boxs">
				{dataFilter.map((office) => {
					const lines = Object.keys(office.lines);
					let waitingOffice = 0;
					let elapsedOffice = 0;

					lines.forEach((line) => {
						waitingOffice += office.lines[line].waiting;
						elapsedOffice += office.lines[line].elapsed;
					});
					elapsedOffice = Math.floor(elapsedOffice / lines.length);

					const elapsed = lineCalc(elapsedOffice);

					return (
						<Office
							name={office.name}
							waiting={waitingOffice}
							elapsed={elapsed}
							online={office.online}
							key={office.name}
						/>
					);
				})}
			</div>
		);
	}
	return <div className="boxs" />;
};

export default Home;
