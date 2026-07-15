import { NavLink } from "react-router-dom";


export default function Navbar(){

return(

<nav className="navbar">

<h2>🚗 AutoWorld</h2>


<div>

<NavLink to="/">Home</NavLink>

<NavLink to="/about">About</NavLink>

<NavLink to="/cars">Cars</NavLink>

<NavLink to="/contact">Contact</NavLink>

<NavLink to="/profile">Profile</NavLink>


</div>


</nav>

)

}