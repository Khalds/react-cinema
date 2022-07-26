<<<<<<< HEAD
function App() {
  return <div></div>;
=======
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Homepage/Home"

import "./App.css"

import Sessionspage from "./pages/Sessionspage/Sessionspage"
import Movie from "./pages/Movie/Movie"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessionspage />} />
        {/* <Route path="/cinema" element={<Cinema />} />
        <Route path="/contact" element={<Contacts />} />
        <Roite path="/aboutus" element={<Aboutus />} /> */}

        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  )
>>>>>>> 2dcc3123e2c20b9a33968f649f19e196d37c6921
}

export default App;
