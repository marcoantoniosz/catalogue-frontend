import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export default function ProductForm(props) {

  const { text } = props;

  const navigate = useNavigate();

  const schema = yup.object({
    user: yup.string().required("O nome de usuário é obrigatório").matches("M3user", "Nome de usuário inválido"),
    password: yup.string().required("A senha é obrigatória").matches("M3pass", "Senha inválida"),
  }).required();


  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = () => (navigate("/admin"));

  return (
      <Container sx={{ fontSize: "2rem" }} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ pt: 3 }} component="h1" variant="h5">
            { text }
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="ID do produto"
              name="id"
              autoFocus
              {...register("id")}
              error={!!errors?.id}
              helperText={errors?.id ? errors.id.message : null}
            />
						<Typography sx={{ pt: 3, textAlign: "center", fontSize: "20px"}} component="p" variant="h5">
							Thumbnail
						</Typography>
            <TextField
							variant='outlined'
              margin="normal"
              required
              fullWidth
              type="file"
              id="standart-basic"
              name="thumbnail"
              autoFocus
              {...register("thumbnail")}
              error={!!errors?.thumbnail}
              helperText={errors?.thumbnail ? errors.thumbnail.message : null}
            />
						<Typography sx={{ pt: 3, textAlign: "center", fontSize: "20px"}} component="p" variant="h5">
							Imagem 1
						</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              type="file"
              id="image1"
              name="image1"
              autoFocus
              {...register("image1")}
              error={!!errors?.image1}
              helperText={errors?.image1 ? errors.image1.message : null}
            />
						<Typography sx={{ pt: 3, textAlign: "center", fontSize: "20px"}} component="p" variant="h5">
							Imagem 2
						</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              type="file"
              id="image2"
              name="image2"
              autoFocus
              {...register("image2")}
              error={!!errors?.image2}
              helperText={errors?.image2 ? errors.image2.message : null}
            />
						<Typography sx={{ pt: 3, textAlign: "center", fontSize: "20px"}} component="p" variant="h5">
							Imagem 3
						</Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                id="image3"
                name="image3"
                autoFocus
                {...register("image3")}
                error={!!errors?.image3}
                helperText={errors?.image3 ? errors.image3.message : null}
                />
						<Typography sx={{ pt: 3, textAlign: "center", fontSize: "20px"}} component="p" variant="h5">
							Imagem 4
						</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              type="file"
              id="image4"
              name="image4"
              autoFocus
              {...register("image4")}
              error={!!errors?.image4}
              helperText={errors?.image4 ? errors.image4.message : null}
            />
						<Typography sx={{ pt: 3, textAlign: "center", fontSize: "20px"}} component="p" variant="h5">
							Imagem 5
						</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              type="file"
              id="image5"
              name="image5"
              autoFocus
              {...register("image5")}
              error={!!errors?.image5}
              helperText={errors?.image5 ? errors.image5.message : null}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#2405F2' }}
            >
              Salvar
            </Button> 
          </Box>
        </Box>
      </Container>
  );
}