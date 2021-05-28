import React from "react";
import Input from "./Input";

function Register({ fullName, email, password, handleSubmit, handleChange }) {
  return (
    
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <Input
            type="text"
            name="fullName"
            value={fullName}
            className="form-control"
            label="Full Name"
            placeholder="Enter Firstname"
            handleChange={handleChange}
          />
        </div>

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
            Sign Up
          </button>
        </div>
      </form>
    
  );
}

export default Register;
