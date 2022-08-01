import Personal from "./pages/Personal/Personal"

import { Route, Routes,  Navigate } from "react-router-dom"
import Home from "./pages/Homepage/Home"
import Cinema from "./Components/Cinema/Cinema"
import { useSelector } from "react-redux"

import "./App.css"
import BookingPage from "./pages/Bookingpage/Bookingpage"
import Sessionspage from "./pages/Sessionspage/Sessionspage"
import Movie from "./pages/Movie/Movie"
import Basket from "./Components/Basket/Basket";

import AboutUsPages from "./pages/AboutUs/AboutUsPages"
import Authorization from "./pages/Authorization/AuthorizationPages"
import Registration from "./pages/Registration/RegistrationPages"

import Bookingpage from "./pages/Bookingpage/Bookingpage"

function App() {
  const token = useSelector((state) => state.application.token)
  const registrError = useSelector((state) => state.application.registrError)
  
 

  if(registrError === 1) {
    return (
      <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/sessions" element={<Sessionspage />} />
    <Route path="/booking/:id" element={<BookingPage />} />
    <Route path="/basket" element={<Basket />} />
    {/* <Route path="/cinema" element={<Cinema />} />
    <Route path="/contact" element={<Contacts />} />
    <Roite path="/aboutus" element={<Aboutus />} /> */}

    <Route path="/booking" element={<Bookingpage />} />
    <Route path="/cinema" element={<Cinema />} />
    <Route path="/movie/:id" element={<Movie />} />
    <Route path="/personal" element={<Navigate to="/signin/" replace/>} />
    <Route path="/signup" element={<Navigate to="/signin/" replace/>} />
    <Route path="/signin" element={<Authorization />} />
    <Route path="/aboutUs" element={<AboutUsPages />} />
</Routes>
    )
  } else if(token === null) {
return (
  <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessionspage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/basket" element={<Basket />} />
        {/* <Route path="/cinema" element={<Cinema />} />
        <Route path="/contact" element={<Contacts />} />
        <Roite path="/aboutus" element={<Aboutus />} /> */}

        <Route path="/booking" element={<Bookingpage />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/personal" element={<Navigate to="/signin/" replace/>} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Authorization />} />
        <Route path="/aboutUs" element={<AboutUsPages />} />
  </Routes>
)
  } else {

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

        <Route path="/booking" element={<Bookingpage />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Navigate to="/personal" replace/>} />
        <Route path="/aboutUs" element={<AboutUsPages />} />
      </Routes>
    </div>
  )
      }
}

export default App
