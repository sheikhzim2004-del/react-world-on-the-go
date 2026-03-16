import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromiss }) => {


  const [visited, setVisited] = (useState(0))
  
  const visitedCountries = (country)=> {
      setVisited(country.length)
  }

  const countriesData = use(countriesPromiss);
  const countries = countriesData.countries;
  // console.log(countries)
  return (
    <div>
      <h1>There are {countries.length} countries in the web.</h1>
      <p>Visited Country: {visited}</p>
      <div className='countries'>
        {
          countries.map(country => <Country 
            key={country.ccn3.ccn3} 
            country={country}
            visitedCountries={visitedCountries}
            ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;