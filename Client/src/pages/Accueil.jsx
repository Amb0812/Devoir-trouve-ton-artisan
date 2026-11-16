import useAccueil from '../logique/useAccueil.js'
import CarteArtisan from '../composants/CarteArtisan.jsx'

function Accueil() {
  const { artisans, erreur } = useAccueil()

  return (
    <main>
      <section className="bandeau">
        <div className="container">
          <h1>Trouvez un artisan, dans votre région !</h1>
          <p>Avec la région Auvergne-Rhône-Alpes.</p>
        </div>
      </section>

      <section className="container etapes">
        <h2>Comment trouver mon artisan ?</h2>
        <ol className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 list-unstyled">
          <li className="col"><p>Choisir la catégorie d'artisanat dans le menu.</p></li>
          <li className="col"><p>Choisir un artisan.</p></li>
          <li className="col"><p>Le contacter via le formulaire de contact.</p></li>
          <li className="col"><p>Une réponse sera apportée sous 48h.</p></li>
        </ol>
      </section>

      <section className="container du-mois">
        <h2>Les artisans du mois</h2>
        {erreur && <p role="alert">Impossible de charger les artisans.</p>}
        <ul className="row row-cols-1 row-cols-md-3 g-3 list-unstyled">
          {artisans.map((a) => (
            <li className="col" key={a.id_artisan}>
              <CarteArtisan artisan={a} />
            </li>
          ))}
        </ul>
      </section>
    </main>
    
  )
}

export default Accueil