import React, { Component } from 'react';
import json from './countries.json'
import { Link } from 'react-router-dom';

class CountryList extends Component {
    state = {
        countries: json
    }

    render() {


    return(
        <div>  
            {this.state.countries.map((country, index) => {
                return( 
                    <div key={index} className="list-group-item list-group-item-action">
                        <Link to={`/details/${country.cca3}`}>{country.name.common}</Link>
                    </div>
                )
            }

            )}
        </div>
    )    
    }

}

export default CountryList; 