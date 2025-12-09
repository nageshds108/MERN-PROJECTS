import SearchBox from './SearchBox';
import WeatherCard from './card';
import { useState } from 'react';
import './weather.css';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "----",
        Temperature: "----",
        feel: "----",
        humidity: "----",
        max: "----",
        min: "----",
        weather: "----"
    });

    function updateWeather(data) {
        setWeatherInfo(data);
    }

    return (
        <div className='weather-app' >
            <h1>Weatherly</h1>
            <SearchBox getData={updateWeather} />
            <WeatherCard obj={weatherInfo} />
        </div>
    );
}
