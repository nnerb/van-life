
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
import HostVanDetails from './pages/host/components/HostVanDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
            <Route path="host" element={<Host />}>
              <Route index element={<Dashboard/>}/>
              <Route path="income" element={<Income/>}/>
              <Route path="vans" element={<HostVans/>}/>
              <Route path="vans/:id" element={<HostVanDetails/>}/>
              <Route path="reviews" element={<Reviews/>}/>
            </Route>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<VanLayout />}>
            <Route index element={<Vans />}/>
            <Route path=":id" element={<VanDetail />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
