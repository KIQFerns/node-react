import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';

function BarCharts(props) {

  return (
    <Box flexGrow={1} style={{ backgroundColor: '#878787', margin: 75, padding: 25 }}>
      <Typography align="center" variant="h5" gutterBottom>{props.title}</Typography>
      <BarChart
        series={[
          { data: [3, 4, 1, 6, 5], stack: 'A' },
          { data: [4, 3, 1, 5, 8], stack: 'A' },
          { data: [4, 2, 5, 4, 1], stack: 'B' },
          { data: [2, 8, 1, 3, 1], stack: 'B' },
          { data: [10, 6, 5, 8, 9] },
        ]}
        width={600}
        height={350}
      />
    </Box>
  )

}

export default BarCharts;