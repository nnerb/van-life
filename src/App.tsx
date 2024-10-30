
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
import Host from './pages/host/Host'
import Dashboard from './pages/host/pages/Dashboard'
import Income from './pages/host/pages/Income'
import HostVans from './pages/host/pages/Vans'
import Reviews from './pages/host/pages/Reviews'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
            <Route path="/host" element={<Host />}>
              <Route path="/host" element={<Dashboard/>}/>
              <Route path="/host/income" element={<Income/>}/>
              <Route path="/host/vans" element={<HostVans/>}/>
              <Route path="/host/reviews" element={<Reviews/>}/>
            </Route>
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
