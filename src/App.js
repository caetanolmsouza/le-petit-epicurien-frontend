import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/HomePage'
import AllRestaurants from './pages/AllRestaurants'
import AllReservations from './pages/AllReservations'
import Restaurant from './pages/Restaurant'

import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<AllRestaurants />} />
          <Route path="/restaurants/:id" element={<Restaurant />} />
          <Route path="/reservation" element={<AllReservations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
