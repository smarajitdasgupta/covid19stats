import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

const Index = () => {
    return <div>
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <CountrySelector></CountrySelector>
        <Stats url="https://covid19.mathdro.id/api/countries/AU"></Stats>
    </div>
}

export default Index;