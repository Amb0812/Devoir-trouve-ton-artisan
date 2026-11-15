// Adresse de l'API, lue dans le fichier .env
const API_URL = import.meta.env.VITE_API_URL

// Fonction commune : appelle l'API et renvoie les données en JSON
async function appeler(chemin) {
  const reponse = await fetch(`${API_URL}${chemin}`)
  if (!reponse.ok) {
    throw new Error('Erreur API')
  }
  return reponse.json()
}

// Liste des catégories (pour le menu)
export function getCategories() {
  return appeler('/api/categories')
}

// Les 3 artisans du mois (page d'accueil)
export function getArtisansDuMois() {
  return appeler('/api/artisans/mois')
}

// Liste des artisans, filtrée par catégorie ou par nom
export function getArtisans({ categorie, recherche } = {}) {
  const params = new URLSearchParams()
  if (categorie) params.append('categorie', categorie)
  if (recherche) params.append('recherche', recherche)
  const texte = params.toString()
  return appeler(`/api/artisans${texte ? `?${texte}` : ''}`)
}

// Un artisan précis (page fiche)
export function getArtisan(id) {
  return appeler(`/api/artisans/${id}`)
}

// Envoie message du formulaire de contact à l'artisan
export async function envoyerContact(id, champs) {
  const reponse = await fetch(`${API_URL}/api/artisans/${id}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(champs),
  })
  if (!reponse.ok) {
    throw new Error('Erreur API')
  }
  return reponse.json()
}