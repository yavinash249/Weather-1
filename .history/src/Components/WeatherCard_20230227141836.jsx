import React from "react";

const WeatherCard= ({ weather}) => {
    return(
        <div className="weather-card">
            <div className="card-header">
                <div>
                    <p className="weather-city">
                        {weather ? weather.name + "" + <weather className="sys country"></weather>:}
                    </p>
                </div>
            </div>
        </div>
    )
}