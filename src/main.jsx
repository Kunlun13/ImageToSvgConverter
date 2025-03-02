import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Layout from './components/Layout/Layout.jsx'
import DrawingToSvg from './components/DrawingToSvg/DrawingToSvg.jsx'
import Aboutus from './components/AboutUs/Aboutus.jsx'
import Contactus from './components/ContactUs/Contactus.jsx'
import Privacypolicy from './components/PrivacyPolicy/Privacypolicy.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<DrawingToSvg/>} />
      <Route path='AboutUs' element={<Aboutus/>} />
      <Route path='ContactUs' element={<Contactus/>} />
      <Route path='PrivacyPolicy' element={<Privacypolicy/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
