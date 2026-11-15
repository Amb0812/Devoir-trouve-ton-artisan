import { Link } from 'react-router-dom'
import Etoiles from './Etoiles.jsx'

function CarteArtisan({ artisan, voirFiche }) {
  return (
    <Link className="carte" to={`/artisans/${artisan.id_artisan}`}>
      <h3>{artisan.nom}</h3>
      <Etoiles note={artisan.note} />
      <p className="carte__specialite">{artisan.Specialite.nom}</p>
      <p className="carte__ville">{artisan.ville}</p>
      {voirFiche && <p className="carte__lien">Voir la fiche →</p>}
    </Link>
  )
}

export default CarteArtisan