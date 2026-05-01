import { useLocation, useNavigate } from "react-router-dom";
import carsData from "../data/carsData";

function Cars() {
  const location = useLocation();
  const navigate = useNavigate(); 

  const cars = location.state || carsData;

  return (
    <div className="cars-grid">
      {cars.map((car) => (
        <div className="car-card" key={car.id}>
          
          <img
            src={car.image}
            alt={car.model}
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x200?text=Car";
            }}
          />

          <h3>{car.brand} {car.model}</h3>
          <p>{car.price}</p>

         <button onClick={() => navigate(`/cars/${car.id}`, { state: car })}>
                   View Details
          </button>

        </div>
      ))}
    </div>
  );
}

export default Cars;