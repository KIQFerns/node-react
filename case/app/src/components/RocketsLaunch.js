import * as React from 'react';
import PieCharts from './chart/PieChart';
import BarCharts from './chart/BarCharts';

function RocketsLaunch(props) {
    switch (props.chart) {
        case 'pie':
            return <PieCharts {...props} />;
        case 'bar':
            return <BarCharts {...props} />;
        default:
            return <div>Error: Invalid User Role</div>;
    }
}

export default RocketsLaunch;