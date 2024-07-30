



import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
 
export default function Product() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState(" ");
  const state1 = (e) => {
    setSearch(e.target.value);
  };
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
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
          {state.filter((item) => item.title.includes(search)).map((item) => (
            <div key={item.title} className='col-md-4'>
              <div className="card" style={{ backgroundColor: 'black', color: 'white', height: '500px' }}>
                <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '350px' }} />
                <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title">{item.price}</h5>
                 
                
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
     
    </>
)};
 