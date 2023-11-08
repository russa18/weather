import React from 'react'
import { Outlet } from "react-router-dom"
import { Footer, Header } from './components'

function Layout() {
    return (
        <div className='min-h-screen w-screen bg-gradient-to-b from-blue-900 to-indigo-400 flex flex-col justify-between'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout