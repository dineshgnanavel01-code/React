import {Link,Outlet} from "react-router-dom";


function Services(){


return(

<div className="container mt-5">


<h1>
Rental Services
</h1>


<Link
className="btn btn-CC"
to="monthly"
>

Monthly Bookings

</Link>



<Link

className="btn btn-warning"

to="reports"

>

Reports

</Link>


<hr/>


<Outlet/>


</div>


)

}


export default Services;