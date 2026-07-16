import BookingForm from "../components/BookingForm";
import Collection from "../components/Collection";


function Home(){

  return(
    <>

      <section class="hero">
    <div class="overlay">
        <h1>Luxury Car Rental</h1>
        <p>Drive Your Dream Car Today</p>
        <form>
            <button>Book Now</button>
        </form>
    </div>
</section>

      <Collection/>

    </>
  )
}


export default Home;