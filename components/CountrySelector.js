import { useState } from 'react';
import styled from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import DisplayFlag from '../components/DisplayFlag';

const Select = styled.select`
  width: 20rem;
  height:2.5rem;
  background: white;
  border: 1px solid black;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  padding-left: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 1rem;
        padding: 0px 0.5rem 1rem;
    }
`;

const Heading = styled.h2`
    display: inline-block;
`;

const CountrySelector = () => {
    const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('AUS');
    if (loading) return <p>Loading... </p>
    if (error) {
        console.log(error)
        return <p>Error... </p>
    }
    return (
        <div>
            <hr />
            <Heading>By Country </Heading>

            <Select value={selectedCountry} onChange={e => {
                setSelectedCountry(e.target.value);
            }}>
                {Object.entries(countries.countries).map(([key, country]) => (
                    <option
                        key={key}
                        value={country.iso3}>{country.name}</option>
                ))}
            </Select>

            <DisplayFlag country={selectedCountry}></DisplayFlag>
            <br></br>
            <br></br>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </div>
    )
}

export default CountrySelector;