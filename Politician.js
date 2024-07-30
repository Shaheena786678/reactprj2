import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
 
export default function Politician() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState(" ");
  const state1 = (e) => {
    setSearch(e.target.value);
  };
 
  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/politicians')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
 
  return (
    <>
      <div className='container'>

        <div className='row'>
        <input type="text" placeholder="Search" value={search} onChange={state1} style={{ width: '450px' }} />
         </div> <br/>
        <div className='row'>
          {state.filter((item) => item.name.includes(search)).map((item) => (
            <div key={item.name} className='col-md-4'>
              <div className="card" style={{ backgroundColor: 'black', color: 'white', height: '800px' }}>
                <img src={item.image} className="card-img-top" alt={item.name}  style={{ height: '350px' }} />
                <div className="card-body">
                <h5 className="card-title"> Name: {item.name}</h5>
                  <h5 className="card-title">DOB: {item.dob}</h5>
                  <h4 className='card-title'>Country: {item.Country}</h4>
                  <h4 className='card-title'>Party: {item.party}</h4>
                  <h4 className='card-title'>Position: {item.position}</h4>
                  <h4 className='card-title'>{item.biography}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
     
    </>
)};
 