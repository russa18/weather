import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { CurrentWeather, Hourly } from './components/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='current-weather' element={<CurrentWeather />} />
      <Route path='hourly' element={<Hourly/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>,
)
