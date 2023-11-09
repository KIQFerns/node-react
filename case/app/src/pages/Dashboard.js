import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import RocketsLaunch from '../components/RocketsLaunch';
import useFetch from '../hooks/useFetch';
import Typography from '@mui/material/Typography';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GridLaunch from '../components/GridLaunch'

function Dashboard() {

    const fetchLaunch = useFetch('http://localhost:3000/launches/stats', 'dataLaunch');
    const fetchGrid = useFetch('http://localhost:3000/launches/', 'dataGrid');

    useEffect(() => {
        console.log(fetchGrid)
    }, [fetchLaunch, fetchGrid]);

    return (
        <Grid container spacing={2} style={{ backgroundColor: '#2e2e2e' }}>
            <Grid item xs={12}>
                <Typography align="center" variant="h3" marginTop={3} sx={{ fontWeight: 'bold', color: 'white' }}><RocketLaunchIcon fontSize='20' style={{ color: '#ff2929', marginRight: '10' }} />Space X</Typography>
            </Grid>
            <Grid item xs={6}>
                <RocketsLaunch title={'Lançamento de foguetes'} chart={'pie'} />
            </Grid>
            <Grid item xs={6}>
                <RocketsLaunch title={'Lançamentos por ano'} chart={'bar'} />
            </Grid>
            <Grid item xs={12}>
                <Typography align="center" variant="h5" marginTop={3} sx={{ fontWeight: 'bold', color: 'white' }}>Registro de Lançamentos</Typography>
            </Grid>
            <Grid item xs={12}>
                <GridLaunch/>
            </Grid>
        </Grid>
    );
}

export default Dashboard;