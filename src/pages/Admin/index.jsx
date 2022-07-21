import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dashboard from '../../components/Dashboard/Dashboard';
import M3soft from '../../images/m3soft.png';

export default function Admin() {
  return (
    <Dashboard>
     <Container maxWidth="sm">
			<Box sx={{ mb: 40, pt: 5, display: "flex", justifyContent: "center"}}>
				<img src={M3soft} alt="M3soft" />
			</Box>
     </Container>
    </Dashboard>
  )
}
