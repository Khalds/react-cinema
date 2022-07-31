import Personal from "./pages/Personal/Personal"

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Homepage/Home"
import Cinema from "./Components/Cinema/Cinema"

import "./App.css"
import BookingPage from "./pages/Bookingpage/Bookingpage"
import Sessionspage from "./pages/Sessionspage/Sessionspage"
import Movie from "./pages/Movie/Movie"
import Basket from "./Components/Basket/Basket"

import AboutUsPages from "./pages/AboutUs/AboutUsPages"
import Authorization from "./pages/Authorization/AuthorizationPages"
import Registration from "./pages/Registration/RegistrationPages"
import Films from "./Components/Films/Films"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessionspage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/basket" element={<Basket />} />
        {/* <Route path="/cinema" element={<Cinema />} />
        <Route path="/contact" element={<Contacts />} />
        <Roite path="/aboutus" element={<Aboutus />} /> */}
        <Route path="/movies" element={<Films />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Authorization />} />
        <Route path="/aboutUs" element={<AboutUsPages />} />
        <Route path="/movies" element={<Films />} />
      </Routes>
    </div>
  )
}

export default App
