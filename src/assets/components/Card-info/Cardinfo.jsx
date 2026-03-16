import React from 'react';
import './cardinfo.css'

const Cardinfo = ({country}) => {
  return (
    <div className='cardInfo'>
      <div className='location'>
          <h5><small>Capital:</small> <i className="fa-solid fa-location-dot"></i>{country.capital.capital}</h5>
      </div>
      <div className='region'>
          <h5><small>Region: </small> <i className="fa-solid fa-earth-europe"></i>{country.region.region}</h5>
      </div>
      <div className='region'>
          <h5><small>Population: </small> <i className="fa-solid fa-users"></i>   {country.population.population}</h5>
      </div>
      <div className='region'>
          <h5><small>Area: </small> <i className="fa-solid fa-chart-area"></i> {country.area.area}</h5>
      </div>
    </div>
  );
};

export default Cardinfo;