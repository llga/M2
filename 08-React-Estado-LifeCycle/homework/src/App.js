import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';


export default function App() {

  const [cities, setCities] = useState([]);

  const onSearch = (city) => {
    console.log(city)
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then((data) => {
        if (data.main !== undefined) {
          const ciudad = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
          };
          const isExist = cities.find(ciudad => ciudad.id === data.id)
          if(!isExist){
            setCities(oldCities => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards onClose={onClose} cities={cities} />
    </div>
  );
}
