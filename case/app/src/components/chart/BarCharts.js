import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from "react-redux";

function BarCharts(props) {
  const { currentLaunch } = useSelector((state) => state.launchReducer);

  const xLabels = currentLaunch.xlabel;
  const chartData = currentLaunch.finalresult.map(({ label, ...keepAttrs}) => keepAttrs)

  return (
    <Box flexGrow={1} style={{ backgroundColor: '#878787', margin: 75, padding: 25 }}>
      <Typography align="center" variant="h5" gutterBottom>{props.title}</Typography>
      <BarChart
        height={300}
        series={chartData}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </Box>
  )

}

export default BarCharts;