import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css"
import {Col} from "reactstrap"
const Footer = () => {
  return (
    <div className="footer">
      <Col lg='3'>
           <h1><span>e-Muse</span></h1>
            <p>Discover new paintings, cultures,artworks and experiences.</p>
      </Col>
               <h4 className="text-center">All Right Reserved &copy; e-Muse</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
