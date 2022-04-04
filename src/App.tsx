import React, { useState, useEffect } from 'react'
import { Card } from './component/card/card'
import { Loader } from './component/loader/loader'
import { SearchBox } from './component/search-box/search-box'
import './App.css'

function App() {
  const [searchInput, setSearchInput] = useState<string>('')
  const [weather, setWeather] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  
  useEffect(() =>{
    if (searchInput !== '') {

      setLoading(true)
      const apiKey: string = 'fb5a4f065151a3a9948ba5006edfd80c'
      const city: string = searchInput

      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.length > 0) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&lang=fr`)
          .then((resp) => resp.json())
          .then((resp) => {
            setWeather([resp])
            setLoading(false)
          })
          .catch((err) => console.log(err))
        } else {
          setLoading(false)
          setWeather(false)
        }
      })
      .catch((err) => console.log(err))
    }
  }, [searchInput])
  
  const renderData = () => {
    if (weather && !loading) {
      const displayData = weather.map((weather: any) => {
        return <h1>{weather.name} temp max: {weather.main.temp_max}, temp min: {weather.main.temp_min}, temp: {weather.main.temp}, description: {weather.weather[0].description}</h1>
      })
      return displayData
    }
    if (loading) {
      return <h1>LOADING</h1>
    }
    if (!loading && weather === false) {
      return <h1>Pas de résultat</h1>
    }
  }

  return (
    <div className="App">
      <div>
        <SearchBox getSearchInput={setSearchInput} />
      </div>
      <div>
        {renderData()}
      </div>
    </div>
  )
}

export default App
