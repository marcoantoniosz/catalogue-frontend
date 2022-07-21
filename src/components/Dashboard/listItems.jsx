import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export default function MainListItems() {
  const navigate = useNavigate();

  return (
  <List component="nav">
    <ListItemButton onClick={ () => { navigate('/admin') } }>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Painel" />
    </ListItemButton>
    <ListItemButton onClick={ () => { navigate('/admin/new-product') } }>
      <ListItemIcon>
        <AddCircleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Novo produto" />
    </ListItemButton>
    <ListItemButton onClick={ () => { navigate('/admin/new-category') } }>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Nova categoria" />
    </ListItemButton>
    <ListItemButton onClick={ () => { navigate('/admin/new-images') } }>
      <ListItemIcon>
        <AddPhotoAlternateIcon />
      </ListItemIcon>
      <ListItemText primary="Adicionar imagens" />
    </ListItemButton>
    <ListItemButton onClick={ () => { navigate('/admin/edit-product') } }>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Editar produto" />
    </ListItemButton>
    <ListItemButton onClick={ () => { navigate('/admin/edit-category') } }>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Editar categoria" />
    </ListItemButton>
    <ListItemButton onClick={ () => { navigate('/admin/custom') } }>
      <ListItemIcon>
        <ColorLensIcon />
      </ListItemIcon>
      <ListItemText primary="Customizar" />
    </ListItemButton>
  </List>
  )
};