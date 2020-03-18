import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;

const Index = () => {
    return <div>
        <h1>Coronavirus disease (COVID-19) cases</h1>
        <GlobalStyle />
        <h2>Global figures</h2>
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <CountrySelector></CountrySelector>
    </div>
}

export default Index;