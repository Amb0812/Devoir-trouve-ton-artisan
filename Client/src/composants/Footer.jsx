import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="pied">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-4">
          <nav aria-label="Informations légales">
            <h2 className="pied__titre">Informations légales</h2>
            <ul className="list-unstyled">
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/accessibilite">Accessibilité</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="pied__titre">Antenne de Lyon</h2>
            <address>
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
            </address>
          </div>
      </div>
    </footer>
  )
}

export default Footer