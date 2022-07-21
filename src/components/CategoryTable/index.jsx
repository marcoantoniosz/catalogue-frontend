import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Descrição', width: 240 },
];

export default function DataTable(props) {
    const navigate = useNavigate();
    const { rows } = props;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onCellClick={(cell) => {
          navigate(`/admin/edit-category/${cell.id}`);
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
