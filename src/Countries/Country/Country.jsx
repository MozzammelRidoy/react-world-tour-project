import { useState } from 'react';
import './Country.css'
const Country = ({conutries, handleVisitedCountries}) => {
    // console.log(conutries);
    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        // setVisited(true);
        setVisited(!visited);
    }
    const {name, flags, cca2} = conutries;

    return (
        <div className={`country-container ${visited&& 'visited'}`}>
            <h3 style={visited? {color: 'green'}: {color: 'white'}}>Name : {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Country Code : <strong>{cca2}</strong></p>
            <button onClick={() => { visited|| handleVisitedCountries(conutries), handleVisited()}}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? ' I have visited This Place' : ' I want to Visit'} 
        </div>
    );
};

export default Country;