import React from 'react';


class Search extends React.Component{

    state = {
        search: ''
    }

    render(){
        return(
            <div className="search">
                <div className="search__box">
                    <div className="icon__search">
                        <i className="fas fa-search"></i>
                    </div>
                    <input type="text" className="input" name="search" placeholder="Buscar Sucursal" onChange={this.props.onChange}  />
                </div>
                
            </div>
        )
    }
}


export default Search;