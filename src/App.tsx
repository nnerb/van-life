
import { 
  RouterProvider, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom'

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
import HostVans from './pages/host/pages/vans/HostVans'
import Reviews from './pages/host/pages/Reviews'
import HostVanDetail from './pages/host/pages/vans/van/HostVanDetail'
import HostVanPricing from './pages/host/pages/vans/van/HostVanPricing'
import HostVanPhotos from './pages/host/pages/vans/van/HostVanPhotos'
import HostVanInfo from './pages/host/pages/vans/van/HostVanInfo'
import NotFoundPage from './components/NotFound'
import { vanLoader } from './loaders/vanLoader'
import { hostVanLoader } from './loaders/hostVanLoader'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
      <Route path="host" element={<Host />}>
        <Route index element={<Dashboard/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="vans" element={<HostVans/>} />
        <Route path="vans/:id" element={<HostVanDetail/>} loader={hostVanLoader}>
          <Route index element={<HostVanInfo/>}/>
          <Route path="pricing" element={<HostVanPricing/>} />
          <Route path="photos" element={<HostVanPhotos/>}/>
        </Route>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
    <Route path="about" element={<About />}/>
    <Route path="vans" element={<VanLayout />}>
      <Route index element={<Vans />}/>
      <Route path=":id" element={<VanDetail />} loader={vanLoader}/>
    </Route>
    <Route path="*" element={<NotFoundPage />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
