import React from 'react'
import {Link} from "react-router-dom"
function Footer() {
  return (
    <div className='bg-indigo-400 p-5 pb-0'>
    <div className='flex flex-row  justify-center '>
      <Link to="#" className='text-lg  font-medium mx-3'>Terms of Use</Link>
      <Link to="#" className='text-lg  font-medium mx-3'>Privacy Policy</Link>
      <Link to="#" className='text-lg  font-medium mx-3'>Feedback</Link>
      <Link to="#" className='text-lg  font-medium mx-3'>Weather API</Link>

    </div>
      <p className='text-sm font-light text-center mt-2'>All rights reserved</p>
    </div>
  )
}

export default Footer