// src/Footer.js
import React from 'react';
import { FaYoutube, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'; // Đảm bảo rằng Bootstrap đã được import
import '../css/Footer.css'; 

function Footer() {
    return (
         <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
                    <p>Chúng tôi cung cấp các sản phẩm và dịch vụ chất lượng cao cho khách hàng.</p>
                   
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: tmanh5417@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="#"> <FaFacebook /></a> | <a href="#"><FaTwitter /></a> | <a href="#"> <FaEnvelope /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Product Shop Online.</p>
      </div>
    </footer>
    );
}

export default Footer;
