import {Link} from "react-router-dom";


function CarCard({car}){


return(

<div className="card">


<h2>
{car.name}
</h2>


<p>
Price : ₹{car.price}
</p>


<Link to={`/cars/${car.id}`}>

Details

</Link>


</div>

)

}


export default CarCard;