/* eslint-disable react/prop-types */
import React from 'react';

const Office = (props) => {
	const { online, name, waiting, elapsed } = props;
	if (online) {
		return (
			<div className="box">
				<div className="box__body">
					<div className="box__body--title">{name}</div>
				</div>
				<div className="box__detail">
					<div className="box__detail--waiting">
						<div>
							<i className="far fa-user" />
						</div>
						<div className="box__detail--waiting-number">{waiting}</div>
					</div>
					<div className="box__detail--elapsed">
						<div>
							<i className="far fa-clock" />
						</div>
						<div className="box__detail--elapsed-number">{elapsed}</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="box--disabled">
			<div className="box__body">
				<div className="box__body--title">{name}</div>
			</div>
			<div className="box__detail--disabled">
				<div className="box__detail--waiting">
					<div>
						<i className="far fa-user" />
					</div>
					<div className="box__detail--waiting-number">{waiting}</div>
				</div>
				<div className="box__detail--elapsed">
					<div>
						<i className="far fa-clock" />
					</div>
					<div className="box__detail--elapsed-number">{elapsed}</div>
				</div>
			</div>
		</div>
	);
};

export default Office;
