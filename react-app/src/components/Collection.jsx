const cars = [
  {
    image: "suv",
    title: "SUV Collection",
    desc: "Ford, Toyota, BMW Luxury SUV",
  },

  {
    image: "sedan",
    title: "Sedan Collection",
    desc: "Honda City, BMW Sedan, Mercedes",
  },

  {
    image: "hatch",
    title: "Hatchback Collection",
    desc: "Swift, i20, Premium Hatchbacks",
  },
];

function Collection() {
  return (
    <section className="collection">

      <h2>Our Premium Collection</h2>

      <div className="grid">

        {cars.map((car) => (
          <div className="car-card" key={car.title}>

            <div className={`car-image ${car.image}`}></div>

            <h3>{car.title}</h3>

            <p>{car.desc}</p>

            <button>
              View Cars →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Collection;