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
          <Typography sx={{ pt: 3 }} component="h1" variant="h5">
            Novo Produto
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="descricao"
              label="Descrição"
              name="descricao"
              autoFocus
              {...register("descricao")}
              error={!!errors?.descricao}
              helperText={errors?.descricao ? errors.descricao.message : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="descricaoResumida"
              label="Descrição Resumida"
              name="descricaoResumida"
              autoFocus
              {...register("descricaoResumida")}
              error={!!errors?.descricaoResumida}
              helperText={errors?.descricaoResumida ? errors.descricaoResumida.message : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="venda"
              label="Venda"
              name="venda"
              autoFocus
              type="number"
              {...register("venda")}
              error={!!errors?.venda}
              helperText={errors?.venda ? errors.venda.message : null}
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