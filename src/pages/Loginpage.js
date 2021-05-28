import React, {useState} from 'react'
import Login from '../components/Login';
function Loginpage(props) {
    const [inputs, setInputs] = useState({ email:'', password:'' })
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInputs({ ...inputs, [name]: value });
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((item) => item.email.toLowerCase() === inputs.email.toLowerCase());
        if (!user) {
            alert("email or password incorrect")
            return
        }
        if(inputs.email === "" || inputs.password === ""){
            alert("fields can not empty");
            return;
        }else if(user.password.toLowerCase() !== inputs.password.toLowerCase()){
            alert("password incorect");
            return;
        }
        props.history.push("/recipe")
    }
    return (
        <div>
            
            <Login 
        email={inputs.email}
        password={inputs.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
        </div>
    )
}

export default Loginpage
