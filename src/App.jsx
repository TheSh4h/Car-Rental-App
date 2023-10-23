import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import RootLayout from './layouts/RootLayout'
import About from './pages/About/About'
import Vehicles from './pages/Vehicles/Vehicles'
import TestimonialPage from './pages/Testimonials/TestimonialPage'
import Contact from './pages/Contact/Contact'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vehicles' element={<Vehicles />} />
        <Route path='testimonials' element={<TestimonialPage />} />
        <Route path='Contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
