import React, { useState } from 'react';
import './Contact.css'
export default function Contact() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
 
  const handleLogin = () => {
   
    console.log("Fname", fname);
    console.log("Email",email);
    console.log("Msg",msg);
  };
return (
  <>
  <div className='container-fluid3 bg-dark'>

      <div className='row bg-dark'>
          <div className='col-md-12 bg-dark'>
          <div className='carda bg-dark'>
          <h3 style={{color:'red'}}>Contact us</h3>
          <h4>We con't solve your problem if you don't tell us about it!</h4>
          </div>
      </div>
      </div>

      <div className='row'>
          <div className='col-md-6'>
          <div className='card1'>
          <h3>
<span>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-house-fill" viewBox="0 0 16 16">
<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg> </span> Adderss </h3>
  <h4>Plot No 3 & 4,Madhapur,<br/>Hyderabad,500081</h4>
  <h3> <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> </span> Phone </h3>
  <h4>571-457-2321</h4>
  <h3><span ><svg xmlns="http://www.w3.org/2000/svg"   width="20" height="20" fill="white" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
<path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
<path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg></span> Email </h3>
  <h4>mouritech123@gmail.com</h4>
          </div>
      </div>
     


          <div className='col-md-6'>
          <div className='card2'>
          <form>
  <h3>Send Message</h3>
  <input type="text" placeholder="Full name" style={{margin:"8px", maxWidth:'200px'}} value={fname} onChange={(e) => setFname(e.target.value)}/>
      <br/>
   
    <input type="text" placeholder="Email" style={{margin:"8px",  maxWidth:'200px'}} value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <input type="text" placeholder=" Type Your Message..." style={{margin:"8px", padding:"15px", maxWidth:'200px'}} value={msg} onChange={(e) => setMsg(e.target.value)}/>
      <br/>
     
    <button onClick={handleLogin}  style={{margin:"8px", maxWidth:'200px'}} >send</button>
</form>
         
      </div>
      </div>
      </div>
      </div>
 
 
  </>
);
};

