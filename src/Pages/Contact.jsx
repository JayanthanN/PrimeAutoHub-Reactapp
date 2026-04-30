import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
     <div className="contact-page">

      {/* 🔥 TOP BANNER */}
      <div className="contact-banner">
        <h2>Subscribe to our Newsletter</h2>
        <input type="text" placeholder="Enter your email" />
      </div>

      {/* 🔥 MAIN SECTION */}
      <div className="contact-container">

        {/* LEFT FORM */}
        <div className="contact-form">
          <h2>Send Us Message</h2>

          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Subject" />
          </div>

          <textarea placeholder="Message"></textarea>

          <button>Send Message</button>
        </div>

        {/* RIGHT MAP */}
        <div className="contact-map">
          <iframe
            src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="map"
          ></iframe>
        </div>

      </div>

    </div>
  );
}

export default Contact;