import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import ListeArtisans from './pages/ListeArtisans.jsx'
import FicheArtisan from './pages/FicheArtisan.jsx'
import PageLegale from './pages/PageLegale.jsx'
import Page404 from './pages/Page404.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/artisans" element={<ListeArtisans />} />
        <Route path="/artisans/:id" element={<FicheArtisan />} />
        <Route path="/mentions-legales" element={<PageLegale />} />
        <Route path="/donnees-personnelles" element={<PageLegale />} />
        <Route path="/accessibilite" element={<PageLegale />} />
        <Route path="/cookies" element={<PageLegale />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App