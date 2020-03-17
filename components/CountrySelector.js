import useStats from '../utils/useStats';

const CountrySelector = () => {
    const countries = useStats('https://covid19.mathdro.id/api/countries');
    if (!countries) return <p>Loading... </p>
    console.log(countries);
    return (
        <div>
            <select>
                {Object.entries(countries.countries).map(([country, code]) => (
                    <option key={country} value={code}>{country}</option>
                ))}
            </select>
        </div>
    )
}

export default CountrySelector;