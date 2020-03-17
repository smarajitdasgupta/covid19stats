import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';

const CountrySelector = () => {
    const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('AU');
    if (loading) return <p>Loading... </p>
    if (error) return <p>Error... </p>
    console.log(countries);
    return (
        <div>
            <hr />
            <h2>Currently Showing {selectedCountry}</h2>
            <select onChange={e => {
                console.log(e.target.value);
                setSelectedCountry(e.target.value);
            }}>
                {Object.entries(countries.countries).map(([country, code]) => (
                    <option
                        key={country}
                        selected={selectedCountry === countries.iso3[code]}
                        value={countries.iso3[code]}>{country}</option>
                ))}
            </select>
            <br></br>
            <br></br>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </div>
    )
}

export default CountrySelector;