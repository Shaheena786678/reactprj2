import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
 
export default function Product() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState(" ");
  const state1 = (e) => {
    setSearch(e.target.value); 
  };
 
  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/movies')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
 
  return (
    <>
      <div className='container'>
        <div className='row'>
        <input type="text" placeholder="Search" value={search} onChange={state1} />
        <br/> <br/>
        <div className='row'>
          {state.filter((item) => item.title.includes(search)).map((item) => (
            <div key={item.id} className='col-md-4'>
              <img src={item.poster} className="card-img-top" alt={item.title} />
                
              <div className="card">
                 <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <h3 className="card-title">Year: {item.year}</h3>
                  <h3 className="card-title">{item.genre}</h3>
                  <p className="card-text">{item.plot}</p>
                 
                  <h3 className="card-title">Rating: {item.rating}</h3>
               
                </div>
              </div>
           </div>
          ))}
        </div>
        </div>
      </div>
    </>
)};
