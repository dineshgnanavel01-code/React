import {Link,Outlet} from "react-router-dom";


function Services(){


return(

<div >


<h1>
Rental Services
</h1>


<Link

>

Monthly Bookings

</Link>

<Link



>

Reports

</Link>


<hr/>


<Outlet/>


</div>


)

}


export default Services;