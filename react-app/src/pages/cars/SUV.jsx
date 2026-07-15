import suvImage from "../../assets/suv.jpg";


export default function SUV(){

return(

<div className="car-card">


<img 
src={suvImage}
alt="SUV Car"
/>


<h2>
SUV Cars
</h2>


<p>
🚗 Mahindra XUV700
</p>


<p>
🚗 Hyundai Creta
</p>


<p>
🚗 Tata Safari
</p>


<button>
View Details
</button>


</div>

)

}