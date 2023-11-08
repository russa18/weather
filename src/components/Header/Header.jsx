import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addLocation } from '../../store/locationSlice'

function Header() {
  const [searchInp, setSearchInp] = useState('')
  // const [isHamClicked, setIsHamClicked] = useState(false)

  const dispatch = useDispatch()

  const search = (e) => {
    e.preventDefault();
    dispatch(addLocation(searchInp))
    setSearchInp('')
    // console.log(searchInp)
  }

  // const toggleMenu = () => {
  //   setIsHamClicked(!isHamClicked)
  // }

  const locationFromStore = useSelector(state => state.location);
  return (
    <header className="flex flex-col-reverse justify-evenly md:flex-row items-center md:justify-between w-full bg-[#00143c] font-semibold p-6  text-lg">

      <nav className=' '>
        {/* <ul className={`${isHamClicked ? "flex flex-col p-3 w-1/2 rounded-lg absolute right-10 top-24 bg-slate-100" : "hidden"}  md:flex `}> */}
        <ul className={`  flex flex-col text-center md:flex-row`}>
          <li className="me-5">
            <NavLink to="/"
              className={({ isActive }) => (`${isActive ? "text-[#dcf0f0] font-extrabold underline" : "text-[#dcdcf0] "} `)}

            >Current Weather</NavLink>
          </li>
          <li>
            <NavLink to="/hourly"
              className={({ isActive }) => (`${isActive ? "text-[#dcf0f0] font-extrabold underline" : "text-[#dcdcf0]"} me-5`)}
            >Hourly</NavLink>
          </li>

        </ul>
      </nav>

      <form className='flex align-middle py-3 md:py-0' onSubmit={search}>
        <input
          type="text"
          placeholder='Enter location'
          className='me-3 text-sm p-2 text-black border-0 rounded-md'
          onChange={(e) => setSearchInp(e.target.value)}
          value={searchInp}
        />
        <button type='submit' className='bg-slate-50 text-black px-2 py-1 rounded-md'>search</button>
      </form>


      <div className='font-semibold text-center'>
        <p className='uppercase font-bold text-[#f0ffff]'>{locationFromStore?.location}</p>
        <p className='text-[#f0ffff]'>{locationFromStore?.currDate}</p>
      </div>



      {/* <div className='block text-4xl font-extrabold  md:hidden' onClick={toggleMenu}>
        &#8801;
      </div> */}
    </header>

  )
}

export default Header