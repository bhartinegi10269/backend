import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]); 
  const [limit, setLimit] = useState(''); 
  const [offset, setOffset] = useState(''); 
  const [filteredData, setFilteredData] = useState([]); 

  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/orders?'); 
      const result = await response.json();
      setData(result); 
      setFilteredData([]); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  const handleFilter = () => {
    const limitNum = parseInt(limit, 10);
    const offsetNum = parseInt(offset, 10);
    
    
    if (!isNaN(limitNum) && !isNaN(offsetNum)) {
      const newFilteredData = data.slice(offsetNum, offsetNum + limitNum);
      setFilteredData(newFilteredData); 
    } else {
      alert("Please enter valid numbers for limit and offset.");
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h2>Menu List</h2>
        <button className="btn-flt" onClick={fetchData}>Get Data</button>
        <div>
          {data.map(item => (
            <div key={item.id} className="data-item">
              <h3>{item.userId}</h3>
              <h4>{item.id}</h4>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h2>Orders</h2>
        <input className= "input"
          type="number"
          placeholder="Limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
        <input className= "input"
          type="number"
          placeholder="Offset"
          value={offset}
          onChange={(e) => setOffset(e.target.value)}
        />
        <button className="btn-flt" onClick={handleFilter}>Filter</button>
        <div>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <div key={item.id} className="data-item">
                <h3>{item.userId}</h3>
                <h4>{item.id}</h4>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          ) : (
            <p>No filtered data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
