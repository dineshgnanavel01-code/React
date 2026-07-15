import {NavLink,Outlet} from "react-router-dom";


export default function Cars(){


return(

<div className="container">


<h1>
Available Cars
</h1>


<div className="menu">


<NavLink to="suv">
SUV
</NavLink>


<NavLink to="sedan">
Sedan
</NavLink>


<NavLink to="hatchback">
Hatchback
</NavLink>


</div>


<Outlet/>


</div>


)

}