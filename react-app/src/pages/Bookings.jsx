import {useParams} from "react-router-dom";


function Bookings(){


const {id}=useParams();



return(

<div className="container mt-5">


<div className="card p-4">


<h1>
Booking Receipt
</h1>


<h4>
Booking ID : {id}
</h4>


<hr/>


<p>
Vehicle : Toyota Innova
</p>


<p>
Customer : Arun Kumar
</p>


<p>
Rental Days : 5
</p>


<p>
Rental Cost : ₹12500
</p>


<p>
Deposit : ₹3000
</p>


<h3>
Total Payment : ₹15500
</h3>



<button className="btn btn-success">

Download Invoice

</button>


</div>


</div>


)

}


export default Bookings;