import Home from "./pages/Homepage/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/showtimes" element={<Movies />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/contact" element={<Contacts />} />
        <Roite path="/aboutus" element={<Aboutus />} /> */}
      </Routes>
    </div>
  );
}

export default App;
