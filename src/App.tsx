import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Refunds from './pages/Refunds'
import Terms from './pages/Terms'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </HashRouter>
  )
}
