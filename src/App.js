import Personal from "./pages/Personal/Personal"

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Homepage/Home"
import Cinema from "./Components/Cinema/Cinema"

import "./App.css"

import AboutUsPages from "./pages/AboutUs/AboutUsPages"
import Authorization from "./pages/Authorization/AuthorizationPages"
import Registration from "./pages/Registration/RegistrationPages"

import Sessionspage from "./pages/Sessionspage/Sessionspage"
import Movie from "./pages/Movie/Movie"
import Bookingpage from "./pages/Bookingpage/Bookingpage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessionspage />} />
        <Route path="/booking" element={<Bookingpage />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Authorization />} />
        <Route path="/aboutUs" element={<AboutUsPages />} />
      </Routes>
    </div>
  )
}

export default App
