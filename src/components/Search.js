/* eslint-disable react/prop-types */
import React from 'react';

const Search = (props) => {
	const { onChange } = props;
	return (
		<div className="search">
			<div className="search__box">
				<div className="icon__search">
					<i className="fas fa-search" />
				</div>
				<input
					type="text"
					className="input"
					name="search"
					placeholder="Buscar Sucursal"
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default Search;
