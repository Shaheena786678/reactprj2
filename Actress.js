


import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
 
export default function Actress() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState(" ");
  const state1 = (e) => {
    setSearch(e.target.value);
  };
 
  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/actresses')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
 
  return (
    <>
      <div className='container'>
 
 <br/>
        <div className='row'>
        <input type="text" placeholder="Search" value={search} onChange={state1} style={{ width: '450px' }} />
        </div>
 <br/> 
        <div className='row'>
          {state.filter((item) => item.name.includes(search)).map((item) => (
            <div key={item.name} className='col-md-4'>
             <div className="card" style={{ backgroundColor: 'grey', color: 'white' }}>
              <img src={item.image} className="card-img-top" alt={item.brand} style={{ height: '350px' }} />
               
                  <div className="card-body" style={{ backgroundColor: 'grey', color: 'white', height: '500px' }}>
                  <h3 className="card-title">Name: {item.name}</h3>
                  <h3 className="card-title">Birth: {item.birth_year}</h3>
                  <h3 className="card-title">Nationality: {item.nationality}</h3>
                  <p className="card-text">Famous Movies: {item.most_famous_movies}</p>
                  <p className="card-text">Awards: {item.awards}</p>
                  <p className="card-text">Biography: {item.biography}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       </div>
     
    </>
)};
 
 
 