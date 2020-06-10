/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Loading from './components/Loading';
import WithoutResult from './components/WithoutResults';

const App = () => {
	const [state, setState] = useState({
		textSearch: '',
		dataFilter: [],
	});

	const [dataFetch, setDataFetch] = useState([]);

	const [loadData, setLoadData] = useState(false);

	const fetchOffices = () => {
		fetch('https://boiling-mountain-49639.herokuapp.com/desafio-frontend')
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data) {
					setState({
						dataFilter: data,
					});
					setDataFetch(data);
					setLoadData(true);
				}
			});
	};

	useEffect(() => {
		fetchOffices();
	}, []);

	const searchChange = (e) => {
		const filteredOffice = dataFetch.filter((office) => {
			return office.name.toUpperCase().includes(e.target.value.toUpperCase());
		});

		setState({
			textSearch: e.target.value,
			dataFilter: filteredOffice,
		});
	};

	if (!loadData) {
		return (
			<div className="App">
				<Loading />
			</div>
		);
	}

	if (state.dataFilter.length < 1) {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="Logo" alt="logo" />
				</header>
				<Search onChange={searchChange} />
				<WithoutResult />
			</div>
		);
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="Logo" alt="logo" />
			</header>
			<Search onChange={searchChange} />
			<Home dataFilter={state.dataFilter} />
		</div>
	);
};

export default App;
