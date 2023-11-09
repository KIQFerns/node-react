import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import YouTubeIcon from '@mui/icons-material/YouTube';

function GridLaunch(props) {
  const rows = useSelector((state) => state.launchReducer.results);

  function getRocketName(params) {
    return `${params.row.rockets.name}`;
  }

  const columns = [
    { field: 'flight_number', headerName: 'Nº do vôo', width: 90 },
    {
      field: 'logo',
      headerName: 'Logo',
      width: 150,
      editable: false,
      renderCell: (params) => <img width={35} src={params.value} />
    },
    {
      field: 'name',
      headerName: 'Missão',
      width: 150,
      editable: false,
    },
    {
      field: 'date_utc',
      headerName: 'Data de Lançamento',
      width: 150,
      editable: false,
    },
    {
      field: 'rockets.name',
      headerName: 'Foguete',
      width: 150,
      valueGetter: getRocketName,
      editable: false,
    },
    {
      field: 'success',
      headerName: 'Resultado',
      width: 150,
      editable: false,
      renderCell: (params) => params? 'sucesso':'falha'
    },
    {
      field: 'video',
      headerName: 'Video',
      width: 150,
      editable: false,
      renderCell: (params) => <YouTubeIcon style={{ color: 'red' }} onClick={() => window.open('https://youtu.be/'+params.value, '_blank')} />
    }
  ];

  return (
    <Box sx={{ marginLeft: 10, marginRight: 10, backgroundColor: '#878787' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );


}

export default GridLaunch;