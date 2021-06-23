import React from "react";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className="container" >
        <div className="row justify-content-md-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <label>Username</label>
      <input name="username" {...register("username", { required: true, maxLength: 15 })} />
       {errors.username && errors.username.type === "required" && <p>Invalid username</p>}
       {errors.username && errors.username.type === "maxLength" &&<p>Username need to be less than 15 characters</p>}
       <br />
       <label>Password</label>
      <input name="password" {...register("password", { required: true, minLength: 6 })} />
      {errors.password && errors.password.type === "required" && <p>Invalid password</p>}
      {errors.password && errors.password.type === "minLength" &&<p>Password need to be more than 6 characters</p>}
      <p> {errors.password && errors.password.message} </p>
      <input type="submit" />
    </form>
    </div>
    </div>
  );
}

export default Login;