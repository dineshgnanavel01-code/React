import hatchbackImage from "../../assets/hatchback.jpg";


export default function Hatchback(){

return(

<div className="car-card">


<img 
src={hatchbackImage}
alt="Hatchback Car"
/>


<h2>
Hatchback Cars
</h2>


<p>
🚙 Maruti Swift
</p>


<p>
🚙 Hyundai i20
</p>


<p>
🚙 Tata Tiago
</p>


<button>
View Details
</button>


</div>

)

}