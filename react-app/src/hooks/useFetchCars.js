import { useState, useEffect } from "react";

function useFetchCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const carData = data.slice(0, 6).map((item) => ({
          id: item.id,
          name: item.title,
          brand: "BMW",
          price: item.price * 100000,
          image: item.image,
        }));
        setCars(carData);
      });
  }, []);

  return cars;
}

export default useFetchCars;
