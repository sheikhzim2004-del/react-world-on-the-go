import React, { use } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromiss }) => {
  const countriesData = use(countriesPromiss);
  const countries = countriesData.countries;
  // console.log(countries)
  return (
    <div>
      <h1>There are {countries.length} countries in the web.</h1>
      <div className='countries'>
        {
          countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;