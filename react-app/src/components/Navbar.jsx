import {Link} from "react-router-dom";


function Navbar(){


return(

<nav>

<h2>🚗 Car Showroom</h2>


<Link to="/">
Home
</Link>


<Link to="/cars">
Cars
</Link>


<Link to="/services">
Services
</Link>


<Link to="/about">
About
</Link>


<Link to="/contact">
Contact
</Link>


<Link to="/profile">
Profile
</Link>


</nav>

)

}


export default Navbar;