import { Typography } from '@mui/material';
import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';

export default function Custom() {
  return (
    <Dashboard>
      <Typography sx={{ mt: 8, textAlign: "center", mb: 40 }} variant="h4">Customização</Typography>
    </Dashboard>
  )
}