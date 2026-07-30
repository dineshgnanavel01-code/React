import React,{useState} from "react";
import {Link} from "react-router-dom";

function SignIn(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleLogin=(e)=>{
e.preventDefault();
alert(`Welcome back ${email}`);
};

return(
<div className="auth-container">
<div className="auth-card">
<div className="logo">
👤
</div>
<h2>Welcome Back!</h2>
<p className="subtitle">
Sign in to continue your journey
</p>
<form onSubmit={handleLogin}>
<div className="input-box">
<input type="email"placeholder="Enter Email Address" value={email}
onChange={(e)=>setEmail(e.target.value)}
required/>
</div>

<div className="input-box">
<input type="password"placeholder="Enter Password" value={password}
onChange={(e)=>setPassword(e.target.value)}required/>
</div>

<button>Sign In</button>

</form>

<p className="bottom-text">
    Don't have an account?
<Link to="/signup">Create Account</Link>
</p>

</div>
</div>
);
}

export default SignIn;