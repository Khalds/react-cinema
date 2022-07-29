
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import AboutUsPages from "./pages/AboutUs/AboutUsPages"
import Authorization from "./pages/Authorization/AuthorizationPages"
import Registration from "./pages/Registration/RegistrationPages"
import SingleMovie from "./pages/SingleMovie/SingleMovie"

function App() {


  return (
    
    <BrowserRouter>
    <Routes>
<Route path="/signup" element={<Registration />}/>
<Route path="/signin" element={<Authorization/>}/>
<Route path="/" element={<SingleMovie/>}/>
<Route path="/aboutUs" element={<AboutUsPages/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
