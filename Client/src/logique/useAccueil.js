import { useEffect, useState } from 'react'
import { getArtisansDuMois } from '../services/api.js'

// On affiche les artisans du mois
function useAccueil() {
  const [artisans, setArtisans] = useState([])
  const [erreur, setErreur] = useState(false)

  useEffect(() => {
    getArtisansDuMois()
      .then(setArtisans)
      .catch(() => setErreur(true))
  }, [])

  return { artisans, erreur }
}

export default useAccueil