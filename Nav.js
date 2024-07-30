
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import pic1 from './api.png';
import Home from './Home.js';
import About from './About';
import Contact from './Contact';
import Bmi from './Bmi';
import Politician from './Politician.js'
import Actress from './Actress.js'
import Beauty from "./Beauty.js";
import Product from './Product.js'
import Destination from './Destination.js'
import Login from './Login.js'
import Signup from './Signup.js'
export default function Nav() {
  return (
    <>
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <img src={pic1} className="d-block" alt="Logo"  />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{padding:'10px', margin:'15px'}}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link" to="/Bmi">CheckBMI</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
               
                 <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  APIs
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                  <li><Link className="dropdown-item" to="/Product">Products</Link></li>
                  <li><Link className="dropdown-item" to="/Beauty">Beauty</Link></li>
                  <li><Link className="dropdown-item" to="/Destination">Destination</Link></li>
                  <li><Link className="dropdown-item" to="/Actress">Actress</Link></li>
                  <li><Link className="dropdown-item" to="/Politician">Politician</Link></li>
                </ul>
              </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Bmi" element={<Bmi/>} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Signup" element={<Signup />} />
          
          <Route path="/Login" element={<Login />} />
          <Route path="/Politician" element={<Politician />} />
          <Route path="/Actress" element={<Actress />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Destination" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 