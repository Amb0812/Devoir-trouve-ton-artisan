import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArtisan } from '../services/api.js'

// Logique de la fiche : lit l'identifiant dans l'adresseet affiche l'artisan correspondant
function useFicheArtisan() {
  const { id } = useParams()
  const [artisan, setArtisan] = useState(null)
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState(false)

  useEffect(() => {
    getArtisan(id)
      .then((donnees) => {
        setArtisan(donnees)
        setErreur(false)
      })
      .catch(() => setErreur(true))
      .finally(() => setChargement(false))
  }, [id])

// Partie formulaire de contact
  const vide = { nom: '', email: '', objet: '', message: '' }
  const [champs, setChamps] = useState(vide)
  const [statut, setStatut] = useState('')   // '', 'envoi', 'ok' ou 'erreur'

  function modifier(e) {
    setChamps({ ...champs, [e.target.name]: e.target.value })
  }

  async function envoyer(e) {
    e.preventDefault()
    setStatut('envoi')
    try {
      await envoyer(id, champs)
      setChamps(vide)
      setStatut('ok')
    } catch {
      setStatut('erreur')
    }
  }

  return { artisan, chargement, erreur, champs, statut, modifier, envoyer }
}

export default useFicheArtisan