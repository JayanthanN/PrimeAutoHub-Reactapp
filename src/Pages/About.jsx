function About() {
  return (
   <div className="about-container">

     
      <h1 className="about-title">What We Offer</h1>
      <p className="about-sub">
        Premium car showroom experience with top-class services
      </p>

      
      <div className="services">

        <div className="card">
          <h3>Wheel Balancing</h3>
          <p>Perfect alignment for smooth driving</p>
        </div>

        <div className="card active">
          <h3>Transmission</h3>
          <p>High performance gearbox solutions</p>
        </div>

        <div className="card">
          <h3>Car Painting</h3>
          <p>Premium finish and detailing</p>
        </div>

        <div className="card">
          <h3>Inspection</h3>
          <p>Full safety and quality check</p>
        </div>

      </div>

      
      <div className="stats">

        <div>
          <h2>3874</h2>
          <p>Vehicles Stock</p>
        </div>

        <div>
          <h2>299+</h2>
          <p>Dealers Served</p>
        </div>

        <div>
          <h2>6403</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>1450+</h2>
          <p>Vehicles Sold</p>
        </div>

      </div>

    </div>
  );
}

export default About;