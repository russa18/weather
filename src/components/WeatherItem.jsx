import React from 'react'

function WeatherItem({ h }) {
  return (
    <>
      <div className='font-mono  bg-slate-50 border-b-2 border-black p-2 flex justify-between rounded-md'>
        <div className='w-[15%]'>
          {(h?.time.split(" "))[1]}
        </div>
        <div className='font-bold text-xl w-[15%]'>
          {h?.temp_c}
        </div>
        <div className='flex justify-start align-middle w-[20%]'>
          <span className='w-6 h-6 me-5'><img src={h?.condition?.icon} alt="" /></span>
          <span className='text-left'>{h?.condition?.text}</span>
        </div>
        <div className='w-[15%]'>
          {h?.precip_in}
        </div>
        <div className='w-[15%]'>
          {h?.wind_kph}
        </div>
      </div>
    </>
  )
}

export default WeatherItem