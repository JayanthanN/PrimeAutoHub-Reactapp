import { useLocation } from "react-router-dom";

function CarDetails() {
  const location = useLocation();
  const car = location.state;

  if (!car) return <h2 style={{ color: "white" }}>No Car Data 😅</h2>;

  return (
    <div style={styles.container}>
      
      
      <img
        src={car.image}
        alt={car.model}
        style={styles.image}
      />

     
      <h1 style={styles.title}>{car.brand} {car.model}</h1>
      <p style={styles.desc}>{car.desc}</p>
      <h2 style={styles.price}>{car.price}</h2>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",  
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    padding: "20px"
  },

  image: {
    width: "80%",         
    maxWidth: "700px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
  },

  title: {
    fontSize: "28px",
    marginBottom: "10px"
  },

  desc: {
    maxWidth: "600px",
    opacity: 0.8,
    marginBottom: "10px"
  },

  price: {
    color: "#00ffcc",
    fontSize: "24px",
    fontWeight: "bold"
  }
};

export default CarDetails;