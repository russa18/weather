import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDate } from '../../store/locationSlice'
function CurrentWeather() {
  const [weather, setWeather] = useState({})

  const locationFromStore = (useSelector(state => state.location))

  const dispatch = useDispatch()
  // console.log(locationFromStore.location);

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=1c238ddb55544a56bde52245230711&q=${locationFromStore.location ? locationFromStore.location : "goa"}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setWeather(data)
        dispatch(addDate(data.location.localtime))

      }
      )
  }, [locationFromStore])
  return (
    <div className='p-5 flex flex-col justify-center bg-red-50 w-[90%] mx-auto  md:w-1/3 rounded-xl text-center '>


      <p className='font-semibold'>{weather?.location?.region}</p>
      <p className='font-light mt-2 text-sm text-gray-800'>{weather?.location?.localtime}</p>
      <div className='flex justify-center my-3 align-top'>
        <img src={weather.current?.condition.icon} alt="feels like" className='me-2 w-15 object-cover' />
        <span className='font-mono text-5xl'>{weather.current?.temp_c} <sup>&deg;</sup></span>
      </div>
      <p>{weather.current?.condition.text}</p>

      <div className='flex mt-5 justify-between border-2 border-black rounded-md p-2 w-full'>
        <div className='w-full md:w-1/2 text-left'>
          <p className='underline decoration-1  font-bold '>Humidity</p>
          <p className='font-semibold font-mono'>{weather.current?.humidity}</p>
        </div>
        <div className='w-full md:w-1/2 text-left'>
          <p className='underline decoration-1 font-bold'>Wind Speed</p>
          <p className='font-semibold font-mono'>{weather.current?.wind_kph}</p>
        </div>
      </div>

      <div className='flex mt-5 justify-between border-2 border-black rounded-md p-2 w-full'>
        <div className='w-full md:w-1/2 text-left'>
          <p className='underline decoration-1  font-bold '>Pressure</p>
          <p className='font-semibold font-mono'>{weather.current?.pressure_in}</p>
        </div>
        <div className='w-full md:w-1/2 text-left'>
          <p className='underline decoration-1 font-bold'>Precipitation</p>
          <p className='font-semibold font-mono'>{weather.current?.precip_in}</p>
        </div>
      </div>



    </div>
  )
}

export default CurrentWeather