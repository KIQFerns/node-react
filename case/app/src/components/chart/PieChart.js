import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDispatch, useSelector } from "react-redux";


function PieCharts(props) {

    const { currentLaunch } = useSelector((state) => state.launchReducer);

    return (
        <Box flexGrow={1} style={{ backgroundColor: '#878787', margin: 75, padding: 25 }}>
        <Typography align="center" variant="h5" gutterBottom>{props.title}</Typography>
        <PieChart
            series={[
                {
                    data: currentLaunch.firstData,
                },
            ]}
            width={700}
            height={300}
            slotProps={{
                legend: {
                  position: { vertical: 'top', horizontal: 'left' },
                  padding: 0,
                },
              }}
        />
        </Box>
    );
}

export default PieCharts;