import { Route, Routes } from "react-router-dom"

import Home from "./pages/Homepage/Home"

import "./App.css"
import MovieDiscrCard from "./pages/Movie/Movie"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/showtimes" element={<Movies />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/contact" element={<Contacts />} />
        <Roite path="/aboutus" element={<Aboutus />} /> */}
        <Route path="/movie/:id" element={<MovieDiscrCard />} />
      </Routes>
    </div>
  )
}

export default App
