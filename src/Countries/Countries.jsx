import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";

const Countries = () => {
    const [conutries, setConutries] = useState([]); 
    const [visitedCountries, setVisitedCountries] = useState([]); 


    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setConutries(data));

    },[])

    const handleVisitedCountries = country => {
        // console.log('Visited Country Hited'); 
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h2 style={{textAlign:'center'}}>ALL Countries</h2>
            
            <div className="countries-container ">
            <ol className="ul-style">
                <h4 style={{textAlign:'center'}}>Visited Countries</h4>
                {
                    visitedCountries.map(country => <li key={country.cca3} className=" li-style" >{ country.name.common} <img src={country.flags.png} alt="" /> </li>)
                }
            </ol>
            {
                conutries.map(conutries => <Country conutries={conutries} handleVisitedCountries={handleVisitedCountries} key={conutries.cca3} ></Country> )
            }
            </div>
            
        </div>
    );
};

export default Countries;