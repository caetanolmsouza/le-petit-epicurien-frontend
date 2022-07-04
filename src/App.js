import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import AllRestaurants from "./pages/AllRestaurants";
import AllReservations from "./pages/AllReservations.jsx";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/restaurants" element={<AllRestaurants />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/reservation" element={<AllReservations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
