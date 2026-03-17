import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromiss }) => {

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) => {
    console.log('visited countries count', country)
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }
  const handleVisitedFlags = (flag) => {
    console.log('set visited flags', flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags)
  }

  const countriesData = use(countriesPromiss);
  const countries = countriesData.countries;
  // console.log(countries)
  return (
    <div>
      <h1>There are {countries.length} countries in the web.</h1>
      <h3>Total Visited Country: {visitedCountries.length}</h3>
      <ul className='ul'>
        {
          visitedCountries.map(country => <li
            key={country.ccn3.ccn3}
          >{country.name.common}</li>)
        }
      </ul>
      <h3>Total Visited Flag: {visitedFlags.length}</h3>
      <div className='visited-flag'>
        {
          visitedFlags.map(flag => <img src={flag}></img>)
        }
      </div>


      <div className='countries'>
        {
          countries.map(country => <Country
            key={country.ccn3.ccn3}
            country={country}
            visitedCountriesCount={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;