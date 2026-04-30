import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav className="navbar" initial={{ y: -50 }} animate={{ y: 0 }}>
     <h2 className="logo">PRIME<span>AUTO HUB</span></h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;