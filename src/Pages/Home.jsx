import { useNavigate } from "react-router-dom";
import { useState,useCallback } from "react";
import carsData from "../data/carsData";

function Home() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    location: "",
    carType: ""
  });

  const brands = [...new Set(carsData.map(car => car.brand))];
  const models = [...new Set(carsData.map(car => car.model))];
  const locations = [...new Set(carsData.map(car => car.location))];
  const types = [...new Set(carsData.map(car => car.type))];

 const handleSearch = useCallback(() => {

  if (
    !filters.brand &&
    !filters.model &&
    !filters.location &&
    !filters.carType
  ) {
    alert("Please select at least one filter 🚗");
    return;
  }

  const filteredCars = carsData.filter(car =>
    (!filters.brand || car.brand === filters.brand) &&
    (!filters.model || car.model === filters.model) &&
    (!filters.location || car.location === filters.location) &&
    (!filters.carType || car.type === filters.carType)
  );

  if (filteredCars.length === 0) {
    alert("No cars found 😢");
    return;
  }

  navigate("/cars", { state: filteredCars });

}, [filters, navigate]); // 🔥 dependency
 

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Ultimate Horse on the Track</h1>
          <p>Find your dream car with premium experience</p>

          <button onClick={() => navigate("/cars", { state: carsData })}>
            Explore Cars
          </button>
        </div>
      </section>

      {/* SEARCH */}
      <div className="search-container">

        <select onChange={(e) => setFilters({...filters, brand: e.target.value})}>
          <option value="">Select Brand</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({...filters, model: e.target.value})}>
          <option value="">Select Model</option>
          {models.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({...filters, location: e.target.value})}>
          <option value="">Location</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({...filters, carType: e.target.value})}>
          <option value="">Car Type</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <button onClick={handleSearch}>Search 🔍</button>
      </div>

    </div>
  );
}

export default Home;