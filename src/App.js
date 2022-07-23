import { Route, Routes } from "react-router-dom"
import "./App.css"
import MovieDiscrCard from "./pages/MovieDiscrCard/MovieDiscrCard"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/movieCard" element={<MovieDiscrCard />} />
      </Routes>
    </div>
  )
}

export default App
