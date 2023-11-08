import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import RocketsLaunch from '../components/RocketsLaunch';
import useFetch from '../hooks/useFetch';


function Dashboard() {

    const url = 'http://localhost:3000/launches/stats';
    const fetch = useFetch(url);

    useEffect(() => {
        console.log(fetch)
    }, [fetch]);

    return (
        <Grid container spacing={2} style={{ backgroundColor: '#616161' }}>
            <Grid item xs={6}>
                <RocketsLaunch title={'Lançamento de foguetes'} chart={'pie'} />
            </Grid>
            <Grid item xs={6}>
                <RocketsLaunch title={'Lançamentos por ano'} chart={'bar'} />
            </Grid>
            <Grid item xs={12}>
                {/* Registros de Lançamento */}
                <p>Registros de Lançamento</p>
            </Grid>
        </Grid>
    );
}

export default Dashboard;