import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Descrição', width: 240 },
];

export default function DataTable(props) {
    const { rows } = props;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onSelectionModelChange={() => {
          console.log('hi');;
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
