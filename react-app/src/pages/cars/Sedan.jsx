import sedanImage from "../../assets/sedan.jpg";


export default function Sedan(){

return(

<div className="car-card">


<img 
src={sedanImage}
alt="Sedan Car"
/>


<h2>
Sedan Cars
</h2>


<p>
🚘 Honda City
</p>


<p>
🚘 Hyundai Verna
</p>


<p>
🚘 Skoda Slavia
</p>


<button>
View Details
</button>


</div>

)

}