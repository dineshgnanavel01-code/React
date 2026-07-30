import React,{useState} from "react";
import {Link} from "react-router-dom";

function SignUp(){
const [form,setForm]=useState({
name:"",
email:"",
password:""
});

const handleChange=(e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();
alert("Account Created Successfully");
};

return(
<div className="auth-container">
<div className="auth-card">
<div className="logo">
✨
</div>

<h2>Create Account</h2>

<p className="subtitle">
Join us and start exploring
</p>

<form onSubmit={handleSubmit}>

<div className="input-box">
<input
type="text"
name="name"
placeholder="Full Name"
onChange={handleChange}
required
/>
</div>

<div className="input-box">
<input type="email"name="email"placeholder="Enter Email Address" onChange={handleChange} required/>
</div>

<div className="input-box">
<input type="password" name="password"placeholder="Enter Password"onChange={handleChange}required/>
</div>

<button>Create Account</button>

</form>

<p className="bottom-text">
Already have an account?
<Link to="/signin">Sign In</Link>
</p>

</div>
</div>
);
}

export default SignUp;