import {Link} from "react-router-dom";


function Navbar(){


return(

<nav className="navbar">


<h2>
 Car Rental
</h2>


<div>


<Link to="/">
Home
</Link>


<Link to="/dashboard">
Dashboard
</Link>


<Link to="/vehicles">
Vehicles
</Link>


<Link to="/customers">
Customers
</Link>


<Link to="/services">
Services
</Link>


</div>


</nav>


)

}


export default Navbar;