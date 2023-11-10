import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { WeatherItem } from '../index';


function Hourly() {
  const [hourForecast, setHourForecast] = useState({})
  const locationFromStore = useSelector(state => state.location);
  let forecastHour = []


  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    // //without error handeling
    // fetch(`https://api.weatherapi.com/v1/forecast.json?key=1c238ddb55544a56bde52245230711&q=${locationFromStore.location ? locationFromStore.location : "goa"}&forecastday=10`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setHourForecast(data);
    //     // console.log(data);
    //   })

    // //with error handeling
    (
      async () => {
        try {
          setIsError(false)
          setIsLoading(true)
          const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1c238ddb55544a56bde52245230711&q=${locationFromStore.location ? locationFromStore.location : "goa"}&forecastday=10`);

          const data = await response.json();
          setHourForecast(data);
        } catch (error) {
          setIsError(true)

        } finally {
          setIsLoading(false)
        }

      }
    )()

  }, [locationFromStore])

  if (isError) {
    return <h1 className='text-center text-2xl text-red-700 font-semibold'>Something went wrong</h1>
  }

  if (isLoading) {
    return <h2 className='text-center text-2xl text-yellow-300 font-semibold'>Loading...</h2>
  }



  forecastHour = hourForecast?.forecast?.forecastday[0]?.hour
  return (
    <div className='w-[90%] m-auto my-5'>
      <div className='font-mono  bg-slate-50 border-b-2 border-black p-2 flex justify-between rounded-md'>
        <div className='w-[15%] font-bold'>
          Time
        </div>
        <div className='font-bold text-xl w-[15%] '>
          Temp
        </div>
        <div className='font-bold flex justify-start align-middle w-[25%]'>
          Condition
        </div>
        <div className='w-[10%] font-bold'>
          Rain
        </div>
        <div className='w-[15%] font-bold'>
          Wind Speed
        </div>
      </div>
      {forecastHour?.map((h, index) => (
        <WeatherItem key={index} h={h} />
      ))}


    </div>
  )
}

export default Hourly