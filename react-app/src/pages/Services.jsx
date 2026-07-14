import {
Link,
Outlet
}
from "react-router-dom";


function Services(){


return(

<div>

<h1>
Car Services
</h1>


<Link to="service1">
Service 1
</Link>


<Link to="service2">
Service 2
</Link>


<Link to="service3">
Service 3
</Link>


<Outlet/>


</div>

)

}


export default Services;