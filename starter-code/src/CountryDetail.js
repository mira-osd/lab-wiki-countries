import React, { Component } from 'react';
import json from './countries.json'
import {Link} from 'react-router-dom'


const CountryDetail = (props) => {
    console.log(props)

    const getCountry = (id) =>{
        return json.find(country => country.cca3 === id)
    }; 

    const foundCountry = getCountry(props.match.params.id);

    const getBorders = () => {
        return json.find(country => country.borders === country.name.common)
    }

    return(
        <div className='col-7'>
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
                <tbody>
                    <tr>
                        <p style={{width: '30px'}}>Capital : {foundCountry.capital}</p>
                    </tr>
                    <tr>
                        <td><p>Area : {foundCountry.area}</p></td>
                    </tr>
                    <tr>
            <td>Borders :</td>
            <td>
            {/* {getCountry.map((border, index) => {
                return(
                    <ul key={index}>
                        <li><Link to={`/details/${border.cca3}`}>{border.borders}</Link></li>
                    </ul>
                )
            })} */}
            </td>
            </tr>
            </tbody>
            </table>
        </div>
    )    

};

export default CountryDetail ; 