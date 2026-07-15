import {useState} from "react";


function BookingForm(){


const [customer,setCustomer]=useState("");

const [car,setCar]=useState("");



function submit(e){

e.preventDefault();


alert(
`Booking Created 
Customer:${customer}
Car:${car}`
);


}



return(

<form 
className="booking-form"
onSubmit={submit}
>


<h3>
Book Your Car
</h3>


<input

placeholder="Customer Name"

onChange={
e=>setCustomer(e.target.value)
}

/>



<select
onChange={
e=>setCar(e.target.value)
}
>


<option>
Select Car
</option>

<option>
Toyota Innova
</option>

<option>
BMW X5
</option>

<option>
Mercedes SUV
</option>


</select>



<button>
Confirm Booking
</button>


</form>

)


}


export default BookingForm;