import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getArtisans } from '../services/api.js'

// Logique de la page liste : lit l'adresse 
// et charge les artisans correspondants
function useListeArtisans() {
  const [params] = useSearchParams()
  const categorie = params.get('categorie') || ''
  const recherche = params.get('recherche') || ''

  const [artisans, setArtisans] = useState([])
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState(false)

  // Recharge la liste à chaque changement de catégorie ou de recherche
  useEffect(() => {
    getArtisans({ categorie, recherche })
      .then((donnees) => {
        setArtisans(donnees)
        setErreur(false)
      })
      .catch(() => setErreur(true))
      .finally(() => setChargement(false))
  }, [categorie, recherche])

  // Titre de la page et nombre d'artisans
  let titre = 'Tous les artisans'
  if (categorie) titre = categorie
  if (recherche) titre = `Résultats pour « ${recherche} »`

  const nombre = artisans.length
  const compteur = `${nombre} artisan${nombre > 1 ? 's' : ''}`

  return { artisans, titre, compteur, chargement, erreur }
}

export default useListeArtisans