import BookingForm from "../components/BookingForm";
import Collection from "../components/Collection";


function Home(){

  return(
    <>

      <section className="hero">

        <div className="overlay">

          <h1>
            Luxury Car Rental
          </h1>

          <p>
            Book premium cars anytime anywhere
          </p>

          <BookingForm/>

        </div>

      </section>


      <Collection/>

    </>
  )
}


export default Home;