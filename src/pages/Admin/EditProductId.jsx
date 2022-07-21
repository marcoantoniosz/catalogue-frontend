import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dashboard from '../../components/Dashboard/Dashboard';
import ProductForm from '../../components/ProductForm';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchProductById } from '../../services/API';


export default function Admin() {

    const { id } = useParams();

    const [product, setProduct] = useState({});

    const [loading, setLoading] = useState(true);

    const fetchProduct = useCallback(
        async () => {
            const response = await fetchProductById(id);
            setProduct(response);
            setLoading(false);
        }
    );

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }
        , 2000);
    }, []);

  return (
    <Dashboard>
     <Container maxWidth="sm">
		<Box sx={{ mb: 40, display: "flex", justifyContent: "center"}}>
            { loading ? <div>Loading...</div> : <ProductForm 
            pname={product[0].name}
            psell={product[0].price}
            pcategory={product[0].category}
            text="Editar Produto"
            del={       
                <Box sx={{
                    display: "flex", 
                    justifyContent: "center",
                    }}>
                <IconButton aria-label="delete">
                    <DeleteIcon sx={{ backgroundColor: "red", borderRadius: "30px", width: "40px", height: "40px" }} />
                </IconButton> 
                </Box>
                }
            />}
		</Box>
     </Container>
    </Dashboard>
  )
}
