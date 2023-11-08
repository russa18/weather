import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { WeatherItem } from '../index';


function Hourly() {
  const [hourForecast, setHourForecast] = useState({})
  const locationFromStore = useSelector(state => state.location);
  let forecastHour = []
  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=1c238ddb55544a56bde52245230711&q=${locationFromStore.location ? locationFromStore.location : "goa"}&forecastday=10`)
      .then(response => response.json())
      .then(data => {
        setHourForecast(data);
        // console.log(data);
      })

  }, [locationFromStore])

  forecastHour = hourForecast?.forecast?.forecastday[0]?.hour
  return (
    <div className='w-[90%] m-auto my-5'>
      <div className='font-mono  bg-slate-50 border-b-2 border-black p-2 flex justify-between rounded-md'>
        <div className='w-[15%] font-bold'>
          Time
        </div>
        <div className='font-bold text-xl w-[15%]'>
          Temperature
        </div>
        <div className='font-bold flex justify-start align-middle w-[20%]'>
          Condition
        </div>
        <div className='w-[15%] font-bold'>
          Rain in inch
        </div>
        <div className='w-[15%] font-bold'>
          Wind /h
        </div>
      </div>
      {forecastHour?.map((h, index) => (
        <WeatherItem key={index} h={h} />
      ))}


    </div>
  )
}

export default Hourly