import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>Brand: {car.brand}</p>
      <p>₹ {car.price}</p>
      <Link to={`/cars/${car.id}`}>View Details</Link>
    </div>
  );
}

export default CarCard;
