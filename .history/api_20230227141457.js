import axios from 'axios';

export async function fetchWeather(city,setError){
    console.log(process.env.REACT_APP_API_KEY);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    try{
        const response = await axios.get(url);
        setError(null);
        return response.data;
    }catch(error){
        set
    }
}