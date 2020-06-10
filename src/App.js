import React from 'react';
import logo from './images/logo.png';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Loading from './components/Loading'
import WithoutResult from './components/WithoutResults';

class App extends React.Component{

  state ={
    textSearch:'',
    data: [],
    dataFilter:[],
    loadData:false
  }
  
  searchChange = e => {

    const filteredOffice = this.state.data.filter(office => {
      return office.name.toUpperCase().includes(e.target.value.toUpperCase());
    })

    this.setState({
      textSearch:e.target.value,
      dataFilter: filteredOffice
    })
  }

 
  componentDidMount(){
      this.fetchOffices();
  }

fetchOffices = async () => {
    const response = await fetch('https://boiling-mountain-49639.herokuapp.com/desafio-frontend')

    const data = await response.json();
    const filteredOffice = data.filter(office => {
        return office.name.toUpperCase().includes('');
    })
    this.setState({
        data: data,
        dataFilter: filteredOffice,
        loadData: true
    })
}

  render(){

    if(!this.state.loadData){
      return(
        <div className="App">
            <Loading />
        </div>
      )
    }

    if(this.state.dataFilter.length<1){
      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="Logo" alt="logo" />
          </header>
          <Search onChange={this.searchChange} />
          <WithoutResult />
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="Logo" alt="logo" />
        </header>
        <Search onChange={this.searchChange} />
        <Home dataFilter={this.state.dataFilter} />
      </div>
    )
  }
  
}

export default App;
