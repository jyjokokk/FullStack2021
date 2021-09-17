import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIKEY = process.env.REACT_APP_API_KEY
const APIURL = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=`
const weatherStub = {
  "temperature": null,
  "wind_speed": null,
  "wind_dir": null,
}

const Weather = ({ city }) => {
  const [ newWeather, setWeather ] = useState(weatherStub)
  useEffect(() => {
    axios
    .get(`${APIURL}${city}`)
    .then(response => {
      setWeather(response.data.current)
    })
  }, [city])
  return (
    <div>
      <h2>Weather in {city}</h2>
      <p><b>Temperature: </b>{newWeather.temperature} Celcius</p>
      <p><b>Wind: </b>{newWeather.wind_speed} mph {newWeather.wind_dir}</p>
    </div>
  )
}


const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        Capital: {country.capital}
        <br></br>
        Population: {country.population}
      </div>
      <h2>Languages</h2>
      <ul>
        {country.languages.map(language =>
          <li key={language.name}>{language.name}</li>
        )}
      </ul>
      <img src={country.flag} alt="flag" width="320"/>
      <Weather city={country.capital} />
    </div>
  )
}


const CountriesDisplay = ({ countries, handleClick }) => {
  if (countries.length > 10) {
    return (
      <div></div>
    )
  }
  if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    )
  }
  return (
    <div>
      {countries.map(country =>
        <div key={country.name}>
          {country.name}
          <button onClick={() => handleClick(country.name)}>show</button>
        </div>
      )}
    </div>
  )
}

const App = () => {

  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const changeFilter = (country) => {
    setNewFilter(country)
  }


  const countriesToShow = countries.filter(country =>
    country.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <div>
        <form>
          Find countries:
          <input
            value={newFilter}
            onChange={handleFilterChange}
          />
        </form>
      </div>
      <div>
        <CountriesDisplay countries={countriesToShow} handleClick={changeFilter}/>
      </div>
    </div>
  )
}

export default App;
