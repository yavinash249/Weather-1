import { useState } from 'react';
import './App.css';
import { fetchWeather } from '../api';
import WeatherCard from './Components/WeatherCard';

function App() {
  const [city, setCity] =useState('');
  const [weather, setWeather] = useState('');
  const [error, setError] = useState('');

  const getWeather = async () => {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
