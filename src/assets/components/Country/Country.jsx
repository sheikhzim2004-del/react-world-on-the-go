import React from 'react';

const Country = ({country}) => {
  console.log(country);
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      {/* <p>Currencies: {country.currencies.currencies}</p> */}
    </div>
  );
};

export default Country;