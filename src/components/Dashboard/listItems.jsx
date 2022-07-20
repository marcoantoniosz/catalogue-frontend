import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Painel" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddCircleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Novo produto" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Nova categoria" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddPhotoAlternateIcon />
      </ListItemIcon>
      <ListItemText primary="Adicionar imagens" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Editar produto" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Editar categoria" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ColorLensIcon />
      </ListItemIcon>
      <ListItemText primary="Customizar" />
    </ListItemButton>
  </React.Fragment>
);