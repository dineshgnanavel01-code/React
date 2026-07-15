function Drivers(){


const drivers=[

{
name:"Karthik",
phone:"9876543211",
status:"Active"
},

{
name:"Vijay",
phone:"9876543222",
status:"Available"
}

];


return(

<div className="container mt-5">


<h1>
Driver Information
</h1>


<table className="table table-hover">


<thead className="table-dark">

<tr>

<th>Driver Name</th>
<th>Contact</th>
<th>Status</th>

</tr>

</thead>



<tbody>


{
drivers.map((driver,index)=>(


<tr key={index}>


<td>
{driver.name}
</td>


<td>
{driver.phone}
</td>


<td>

<span className="badge bg-success">

{driver.status}

</span>


</td>


</tr>


))

}


</tbody>


</table>


</div>


)

}


export default Drivers;