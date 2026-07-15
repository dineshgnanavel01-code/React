import { useState } from "react";

function Vehicles() {

  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      model: "Toyota Innova",
      image: "innova",
      year: 2024,
      number: "TN01 AB 1234",
      price: 2500,
      status: "Available"
    },

    {
      id: 2,
      model: "BMW X5",
      image: "bmw",
      year: 2023,
      number: "TN02 CD 4567",
      price: 5000,
      status: "Booked"
    },

    {
      id: 3,
      model: "Mercedes Benz",
      image: "mercedes",
      year: 2024,
      number: "TN03 EF 7890",
      price: 7000,
      status: "Available"
    }
  ]);


  return (

    <div className="container mt-5">

      <h1>
        Vehicle Details
      </h1>


      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>
            <th>Image</th>
            <th>Model</th>
            <th>Year</th>
            <th>License Plate</th>
            <th>Rental Price</th>
            <th>Status</th>
          </tr>

        </thead>


        <tbody>

          {
            vehicles.map(car => (

              <tr key={car.id}>

                <td>
                  <div className={`vehicle-image ${car.image}`}></div>
                </td>

                <td>{car.model}</td>

                <td>{car.year}</td>

                <td>{car.number}</td>

                <td>
                  ₹{car.price}/day
                </td>

                <td>
                  <span className={
                    car.status === "Available"
                    ? "badge bg-success"
                    : "badge bg-danger"
                  }>
                    {car.status}
                  </span>
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );
}

export default Vehicles;