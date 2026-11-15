import { Link, NavLink } from 'react-router-dom'
import useHeader from '../logique/useHeader.js'

function Header() {
  const { categories, recherche, setRecherche, envoyer } = useHeader()

  return (
    <header className='entete'>
      <nav className="navbar navbar-expand-lg" aria-label="Navigation principale">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="Trouve ton artisan - Accueil" height="48" />
          </Link>

          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#menu"
            aria-controls="menu" aria-expanded="false" aria-label="Ouvrir le menu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav me-auto">
              {categories.map((c) => (
                <li className="nav-item" key={c.id_categorie}>
                  <NavLink className="nav-link"
                    to={`/artisans?categorie=${encodeURIComponent(c.nom)}`}>
                    {c.nom}
                  </NavLink>
                </li>
              ))}
            </ul>

            <form className="d-flex" role="search" onSubmit={envoyer}>
              <input className="form-control" type="search"
                placeholder="Rechercher un artisan" aria-label="Rechercher un artisan"
                value={recherche} onChange={(e) => setRecherche(e.target.value)} />
              <button className="btn btn-primary ms-2" type="submit">Rechercher</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header