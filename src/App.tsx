
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components 
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
// MirageJS
import "./server"
import VanDetail from './pages/vans/VanDetail'
import Layout from './Layout'
import VanLayout from './pages/vans/VanLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<VanLayout />}>
            <Route path="/vans" element={<Vans />}/>
            <Route path="/vans/:id" element={<VanDetail />}/>
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
