import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard(props) {

  const navigate = useNavigate();

  const { title, price, thumbnail, id } = props;

  const handleClick = () => {
    navigate(`/product/${id}`);
  }

  return (
    <Card onClick={ handleClick } sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={ thumbnail }
          alt={ title }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <PaymentsIcon />
            `R$ { price }`
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}