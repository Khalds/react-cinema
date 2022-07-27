import Personal from "./pages/Personal/Personal";

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Homepage/Home"

import "./App.css";
// import Cinema from "./Components/Cinema/Cinema";

import Sessionspage from "./pages/Sessionspage/Sessionspage"
import Movie from "./pages/Movie/Movie"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessionspage />} />
        {/* <Route path="/booking" element={<Bookingpage />} /> */}
        {/* <Route path="/cinema" element={<Cinema />} />
        <Route path="/contact" element={<Contacts />} />
        <Roite path="/aboutus" element={<Aboutus />} /> */}

        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </div>
  )
}

export default App;
