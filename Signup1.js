import React, { useState } from 'react';
import './Style1.css'
 
export default function Signup() {
  const [Data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
 
  const handleSignup = () => {
   
    console.log('data:', Data);
  };
 
 
  return (
    <div className="App">
      <h1>Signup Form</h1>
      <input
        type="text"
        placeholder="First Name"
        value={Data.firstName}
        onChange={(e) =>
          setData({ ...Data, firstName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={Data.lastName}
        onChange={(e) =>
          setData({ ...Data, lastName: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
value={Data.email}
        onChange={(e) =>
          setData({ ...Data, email: e.target.value })
        }
      />
       <input
        type="text"
        placeholder="Phone number"
        value={Data.PhoneNumber}
        onChange={(e) =>
          setData({ ...Data, PhoneNumber: e.target.value })
        }
      />
       <input
        type="text"
        placeholder="DOB"
        value={Data.DOB}
        onChange={(e) =>
          setData({ ...Data, DOB: e.target.value })
        }
      />
       <input
        type="password"
        placeholder="Passowrd"
        value={Data.Password}
        onChange={(e) =>
          setData({ ...Data, Password: e.target.value })
        }
      />
       <input
        type="password"
        placeholder="Confirm Password"
        value={Data.ConfirmPassword}
        onChange={(e) =>
          setData({ ...Data, ConfirmPassword: e.target.value })
        }
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
 
