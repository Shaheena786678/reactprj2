import React, { useState } from "react";
import './Login.css'
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = () => {
   
    console.log("Username:", username);
    console.log("Password:", password);
     if (username === 'abc' && password === 'xyz') {
    alert('login successful');
  } else {
    alert('Invalid username or password. Please try again.');
   
  }
  };


 

  return (
   
    <div className="App">
      <div className="text">
       
     
     
     <h2>Login</h2>
     <form>
     <center>
      <input type="text" placeholder="Enter Email id" style={{margin:"18px"}} value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br/>
     
      <input type="password" placeholder="Password" style={{margin:"8px"}} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <br/>
      <button onClick={handleLogin} className="btn btn-outline-success" style={{width:"100px"}} >Login</button> </center></form>
    </div>
    </div>
  );
}
 