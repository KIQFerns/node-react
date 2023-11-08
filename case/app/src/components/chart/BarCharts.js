import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from "react-redux";

function BarCharts(props) {
  const { currentLaunch } = useSelector((state) => state.launchReducer);
  console.log(currentLaunch.Years)
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = currentLaunch.Years;

  return (
    <Box flexGrow={1} style={{ backgroundColor: '#878787', margin: 75, padding: 25 }}>
      <Typography align="center" variant="h5" gutterBottom>{props.title}</Typography>
      <BarChart
        width={500}
        height={300}
        series={[
          { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
          { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </Box>
  )

}

export default BarCharts;