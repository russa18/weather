import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addLocation } from '../../store/locationSlice'

function Header() {
  const [searchInp, setSearchInp] = useState('')
  const [isHamClicked, setIsHamClicked] = useState(false)

  const dispatch = useDispatch()

  const search = (e) => {
    e.preventDefault();
    dispatch(addLocation(searchInp))
    setSearchInp('')
    // console.log(searchInp)
  }

  const toggleMenu = () => {
    setIsHamClicked(!isHamClicked)
  }
  return (
    <header className="flex align-middle justify-between w-full bg-indigo-600 font-semibold p-10  text-lg">


      <nav className=' '>
        <ul className={`${isHamClicked ? "flex flex-col p-3 w-1/2 rounded-lg absolute right-10 top-24 bg-slate-100" : "hidden"}  md:flex `}>
          <li className="me-5">
            <NavLink to="/current-weather"
              className={({ isActive }) => (`${isActive ? "text-black font-extrabold" : "text-gray-900 "} `)}

            >Current Weather</NavLink>
          </li>
          <li>
            <NavLink to="/forecast"
              className={({ isActive }) => (`${isActive ? "text-black font-extrabold" : "text-gray-900"}`)}
            >Forecast</NavLink>
          </li>
        </ul>




      </nav>

      <form className='flex align-middle' onSubmit={search}>
        <input
          type="text"
          placeholder='Enter location'
          className='me-3 text-sm p-2 text-black border-0 rounded-md'
          onChange={(e) => setSearchInp(e.target.value)}
          value={searchInp}
        />
        <button type='submit' className='bg-slate-50 text-black px-2 py-1 rounded-md'>search</button>
      </form>

      <div className='block text-4xl font-extrabold  md:hidden' onClick={toggleMenu}>
        &#8801;
      </div>
    </header>

  )
}

export default Header