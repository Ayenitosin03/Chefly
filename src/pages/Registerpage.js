import React, { useState } from "react";
import Register from "../components/Register";
function Registerpage(props) {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (item) => item.email.toLowerCase() === inputs.email.toLowerCase()
    );
    if (user) {
      alert("user already signup");
      return;
    }
    
    const data = {
      fullName: inputs.fullName,
      email: inputs.email,
      password: inputs.password,
    };
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    props.history.push("/recipe");
  };
  return (
    <div>
      <Register
        fullName={inputs.fullName}
        email={inputs.email}
        password={inputs.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Registerpage;
