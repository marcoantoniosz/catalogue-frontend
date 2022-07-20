import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import M3soft from '../../images/m3soft.png';


function Copyright(props) {
  return (
    <Typography sx={{ fontSize: "100% !important" }} variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.m3soft.com.br/">
        M3Soft
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignIn() {

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
    <ThemeProvider theme={theme}>
      <Container sx={{ fontSize: "2rem" }} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img alt="m3-logo" src={ M3soft } />
          <Typography component="h1" variant="h5">
            Painel de Controle
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuário"
              name="user"
              autoComplete="user"
              autoFocus
              {...register("user")}
              error={!!errors?.user}
              helperText={errors?.user ? errors.user.message : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#2405F2' }}
            >
              Entrar
            </Button> 
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}