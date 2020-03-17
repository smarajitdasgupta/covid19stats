import { useState, useEffect } from 'react';

const useStats = (url) => {
    const [stats, setStats] = useState();
    useEffect(() => {
        async function fetchData() {
            console.log('fetching data');
            const data = await fetch(url).then(res => res.json());
            setStats(data);
        }
        fetchData();
    }, []);
    return stats;
}

export default useStats;