import {useParams} from "react-router-dom";


function CarDetails(){


const {id}=useParams();


return(

<div>

<h1>
Car Details
</h1>


<p>
Selected Car ID : {id}
</p>


</div>

)

}


export default CarDetails;