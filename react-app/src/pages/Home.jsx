import Banner from "../component/Banner";

export default function Home() {

  return (

    <>

      <Banner
        title="Welcome to AutoWorld"
        description="Find your dream car with premium quality, trusted brands and affordable prices."
        buttonText="Explore Cars"
      />


      <section className="features">

        <h2>Why Choose AutoWorld?</h2>


        <div className="feature-grid">


          <div className="feature-card">

            <h3>🚗 Premium Cars</h3>

            <p>
              Latest models from top automobile brands.
            </p>

          </div>



          <div className="feature-card">

            <h3>💰 Best Price</h3>

            <p>
              Affordable deals with flexible finance options.
            </p>

          </div>



          <div className="feature-card">

            <h3>🛠 Service Support</h3>

            <p>
              Complete maintenance and customer support.
            </p>

          </div>


        </div>


      </section>


    </>

  );

}