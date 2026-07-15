import Banner from "./Banner";
import "../index.css";


export default function Home(){

return(

<section className="home-page">


<Banner

title="Welcome to AutoWorld"

description="Experience luxury cars, premium service and the best deals."

buttonText="Explore Cars"

/>


<div className="home-content">

<h2>
Premium Car Showroom
</h2>

<p>
Discover new generation vehicles with advanced technology,
comfort and performance.
</p>


</div>


</section>

)

}