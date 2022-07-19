import React from 'react';
import { useForm } from "react-hook-form";
import Marca from '../../images/marca.png';
import './style.css';


export default function Admin() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
				<img className="brand" src={ Marca } alt="marca" />
				<input {...register("email" , { required:true })} />
				<input {...register("senha", { required: true })} />
				<button type="submit">Login</button>
				<div className="check">
					<p>Lembrar</p>
					<input type="checkbox" name="lembrar" />
				</div>
    	</form>
    </div>
  )
}
