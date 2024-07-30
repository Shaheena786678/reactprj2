import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
 
export default function Airlines() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const state1 = (e) => {
    setSearch(e.target.value);
  };
 
  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/airlines')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
 
  return (
    <>
      <div className='container' style={{ backgroundColor: 'rgb(104, 102, 102)' }}>
      <br/>
     <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '350px' }} />
        <button className="btn btn-outline-success" type="submit" style={{ width: '200px' }}>Search</button>
      </form>
<br/> 
       
        <div className='row'>
          {state.filter((item) => item.name.includes(search)).map((item) => (
         
              <div className="card" style={{ height: '350px' }}>
                <div className="card-body" style={{ backgroundColor: 'black', color: 'white' }}>
                  <h5 className="card-title">{item.name}</h5>
                  <h4 className='card-title'>{item.founded}</h4>
                  <p className="card-text">{item.website}</p>
                  <p className="card-text">{item.headquarters}</p>
                  <p className="card-text">{item.destinations}</p>
                 </div>
              </div>
           
          ))}
        </div>
      </div>
    
    </>
)};
