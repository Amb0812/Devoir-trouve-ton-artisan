import { Link } from 'react-router-dom'

function Page404() {
  return (
    <main>
      <section className="container page-404">
        <div className="row align-items-center">
          <figure className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
            <img className="page-404__image" src="/404.png" alt="Erreur 404, page introuvable" />
          </figure>

          <div className="col-12 col-md-6 col-lg-7 page-404__texte">
            <h1>
              <span className="page-404__code">404</span>
            Page non trouvée
            </h1>
            <Link className="btn btn-primary" to="/">Retour à l'accueil</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page404