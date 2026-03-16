import React, { useState } from 'react';
import './country.css'
import Cardinfo from '../Card-info/Cardinfo';




const Country = ({ country, visitedCountries}) => {


  const [visited, setVisited] = useState(false)

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
    visitedCountries(country)
  }

  
  // console.log(country);
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img className='img' src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <p>Official Name: {country.name.official}</p>
      <Cardinfo country={country}></Cardinfo>
      <button className='btn' onClick={handleReview}>
        {visited ? 'Visited' : 'Not Visited'}
      </button>
    </div>
  );
};

export default Country;