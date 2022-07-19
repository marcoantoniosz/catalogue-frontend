import React from 'react';
import { useForm } from "react-hook-form";
import Marca from '../../images/marca.png';
import './style.css';


export default function Admin() {
	const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
				<img className="brand" src={ Marca } alt="marca" />
				<input type="text" placeholder="&#xf007; Usuário" {...register("user" , { required:true })} />
				<input type="password" placeholder="&#xf023; Senha" {...register("password", { required: true })} />
				<button type="submit">Login</button>
    	</form>
    </div>
  )
}
