import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`;

const StatBlock = styled.div`
    background: #f2f2f2;
    padding: 2rem;
    border-radius: 1rem;
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 2rem;
    text-align: center;
`;

const Stats = ({ url }) => {
    const { stats, loading, error } = useStats(url);
    if (!stats) return <p>Data not available... </p>;
    const { confirmed = {}, deaths = {}, recovered = {} } = stats;
    const defaultText = 'NA';
    if (loading) return <p>Loading... </p>
    if (error) {
        console.log(error)
        return <p>Error... </p>
    }
    return (
        <StatGrid>
            <StatBlock>
                <h3>Confirmed:</h3>
                <span>{confirmed.value || defaultText}</span>
            </StatBlock>
            <StatBlock>
                <h3>Deaths:</h3>
                <span>{deaths.value || defaultText}</span>
            </StatBlock>
            <StatBlock>
                <h3>Recovered:</h3>
                <span>{recovered.value || defaultText}</span>
            </StatBlock>
        </StatGrid>
    )
}

export default Stats;