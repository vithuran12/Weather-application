import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const key='735d8c73a8dc57bc18f4b9bf0b4fb1c1';

const App = () => {

  const [city,setCity]=useState("");//for search city name
const [data,setData]=useState(0);

  const fetchData=async()=>{
    try{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      console.log(response.data);
      setData(response.data)
      setCity("")//to empty input text after click fetch

    }
    catch(err){
      alert('Please enter the correct city name');
    }
  }


  return (
    <div className='App'>
      <h1>Weather app</h1>

        <div className='input-container'>
          <input
          type='text'
          className='input'
          value={city}
          onChange={(e)=>{
            setCity(e.target.value)
          }}
          placeholder='Enter the city name correctly'
          />

<button className='button' onClick={fetchData}>Fetch</button>

        </div>
        <div className='container'>
        {data.name && ( // Check if data.name exists before rendering
          <div>
            <h1>Place : {data.name}</h1>
            <p>Tem : {data.cod}C</p>
            <p>Code_No : {data.dt}</p>
            {/* Display additional data here */}
          </div>
        )}
        </div>
    </div>
  )
}

export default App;
