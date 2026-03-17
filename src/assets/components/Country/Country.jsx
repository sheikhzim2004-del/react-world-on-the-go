import React, { useState } from 'react';
import './country.css'
import Cardinfo from '../Card-info/Cardinfo';




const Country = ({ country, visitedCountriesCount, handleVisitedFlags}) => {


  const [visited, setVisited] = useState(false);
  const [visitedFlag, setVissitedFlag] = useState(false)

  const handleReview = () => {
    //1 no way 
    // if(visited){
    //   setVisited(false)
    // }else{
    //   setVisited(true)
    // }


    //2 no way
    // setVisited(visited ? false : true)

    //3 no way is the best way
    setVisited(!visited)
    visitedCountriesCount(country)
  }
  const handleVisitedF = ()=> {
    setVissitedFlag(visitedFlag ? false : true)
    handleVisitedFlags(country?.flags?.flags?.png)
  }

  
  // console.log(country);
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img className='img' src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <p>Official Name: {country.name.official}</p>
      <Cardinfo country={country}></Cardinfo>

      <button className='btn' onClick={handleReview}>
        {visited ? 'Visited' : 'Not Visited'}
      </button>
      <button className='btn' onClick={handleVisitedF}>
        {visitedFlag ? 'Visited Flag' : 'Not Visited Flag'}
      </button>
    </div>
  );
};

export default Country;