import { useState } from 'react';
import './App.css';
import { fetchWeather } from '../api';
import WeatherCard from './Components/WeatherCard';

function App() {
  const [city, setCity] =useState('');
  const [weather, setWeather] = useState('');
  const [error, setError] = useState('');

   const handlechange = (event)=>{
    setCity(event.target.value);
   };

   const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      setWeather(weather);
    }catch (error){
      setError("city not found");
    }
   };
  return (
    <div className="App">
      <h1 className='app_heading'>Weather APP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          
        />
        
      </form>
    </div>
  );
}

export default App;
