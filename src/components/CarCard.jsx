import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CarCard({ car }) {
  return (
    <motion.div className="card" whileHover={{ scale: 1.05 }}>
      <img src={car.image} />
      <h3>{car.name}</h3>
      <p>{car.price}</p>
      <Link to={`/cars/${car.id}`}>View Details</Link>
    </motion.div>
  );
}

export default CarCard;