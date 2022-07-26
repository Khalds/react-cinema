import { Route, Routes } from "react-router-dom";

import Home from "./pages/Homepage/Home";
import Movie from "./pages/Movie/Movie";

import "./App.css";
import Sessionspage from "./pages/Sessionspage/Sessionspage";
import Bookingpage from "./pages/Bookingpage/Bookingpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessionspage />} />
        <Route path="/booking" element={<Bookingpage />} />
        {/* <Route path="/cinema" element={<Cinema />} />
        <Route path="/contact" element={<Contacts />} />
        <Roite path="/aboutus" element={<Aboutus />} /> */}
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
