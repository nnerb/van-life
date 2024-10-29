
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components 
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
// MirageJS
import "./server"
import VanDetail from './pages/vans/VanDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
        <Route path="/vans/:id" element={<VanDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
