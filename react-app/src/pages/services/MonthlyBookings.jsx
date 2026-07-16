import {useSearchParams} from "react-router-dom";


function MonthlyBookings(){


const [search]=useSearchParams();


const month =
search.get("month") || "January";


return(

<div className="monthly-card">


<h2>
Monthly Booking Report
</h2>


<h4>
Month : {month}
</h4>


<table>

<thead>

<tr>

<th>Vehicle</th>
<th>Customer</th>
<th>Amount</th>

</tr>

</thead>


<tbody>

<tr>

<td>BMW X5</td>
<td>Rajesh</td>
<td>₹25000</td>

</tr>

</tbody>


</table>


</div>

)

}


export default MonthlyBookings;