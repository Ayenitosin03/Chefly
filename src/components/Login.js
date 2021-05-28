import React from "react";
import Input from "./Input";


function Login({email, password, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      
      <div className="form-group">
        <Input
          type="email"
          name="email"
          value={email}
          label="Email"
          className="form-control"
          placeholder="Enter Email"
          handleChange={handleChange}
        />
      </div>

      <div className="form-group">
        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          className="form-control"
          placeholder="Enter password"
          handleChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>.</label>
        <button className="">
        Login
        </button>
      </div>
    </form>
  );
}

export default Login;
