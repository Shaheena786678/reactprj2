import React from "react";
import ReactDOM from 'react-dom/client';
import Product from './Product.js'
//import Movies from './Movies.js'
// import News from './News.js'
// import Bmi from './Bmi.js'
// import Login from './Login.js'
// import Signup from "./Signup.js";
// import Home from './Home.js'
// import Politician from './Politician.js'
// import Actress from './Actress.js'
// import Beauty from "./Beauty.js";
// import Contact from "./Contact.js";
// import About from "./About.js";
// import Destination from './Destination.js'
import pic1 from './api.png'
//import Airlines from './Airlines.js'
import {Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
const root=ReactDOM.createRoot(document.getElementById('root'));
export default function Nav(){
root.render(
 <>
 
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

  <img src={pic1} class="img-fluid" alt="Responsive image"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Bmi">Check BMI</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Signup">Sign Up</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/API" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            API
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Product">Products</Link></li>
           {/* <li><a className="dropdown-item" href="/News">News</a></li>
            <li><a className="dropdown-item" href="#">Weather</a></li>
            <li><a className="dropdown-item" href="/Movies">Movies</a></li> */}
            <li><Link className="dropdown-item" to="/Beauty">Beauty</Link></li>
            <li><Link className="dropdown-item" to="/Actress">Actress</Link></li>
            <li><Link className="dropdown-item" to="/Politician"> Politician </Link></li>
            <li><Link className="dropdown-item" to="/Destination"> Destination </Link></li>
           
          </ul>
        </li>
       
      </ul>
 
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </div>
</nav>


       

{/* <BrowserRouter>
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
         
          <Route path="/Bmi" element={<Bmi />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Politician" element={<Politician />} />
          <Route path="/Actress" element={<Actress />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Contact" element={<Contact />} />
         
        </Routes>
      </BrowserRouter> */}
 
  </>
)
}
