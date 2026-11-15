import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategories } from '../services/api.js'

// Logique du Header : catégories + recherche
function useHeader() {
  const [categories, setCategories] = useState([])
  const [recherche, setRecherche] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => setCategories([]))
  }, [])

  function envoyer(e) {
    e.preventDefault()
    if (recherche.trim()) {
      navigate(`/artisans?recherche=${encodeURIComponent(recherche.trim())}`)
    }
  }

  return { categories, recherche, setRecherche, envoyer }
}

export default useHeader