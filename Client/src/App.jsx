import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './composants/Header.jsx'
import Footer from './composants/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import ListeArtisans from './pages/ListeArtisans.jsx'
import FicheArtisan from './pages/FicheArtisan.jsx'
import PageLegale from './pages/PageLegale.jsx'
import Page404 from './pages/Page404.jsx'


function App() {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/artisans" element={<ListeArtisans />} />
        <Route path="/artisans/:id" element={<FicheArtisan />} />
        <Route path="/mentions-legales" element={<PageLegale titre="Mentions légales" />} />
        <Route path="/donnees-personnelles" element={<PageLegale titre="Données personnelles" />} />
        <Route path="/accessibilite" element={<PageLegale titre="Accessibilité" />} />
        <Route path="/cookies" element={<PageLegale titre="Cookies" />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
    <Footer />  
    </BrowserRouter>
  )
}

export default App