import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import CarDetails from "./Pages/CarDetails";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        
        {/* 🔥 Dynamic route */}
        <Route path="/cars/:id" element={<CarDetails />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;