import useListeArtisans from '../logique/useListeArtisans.js'
import CarteArtisan from '../composants/CarteArtisan.jsx'

function ListeArtisans() {
  const { artisans, titre, compteur, chargement, erreur } = useListeArtisans()

  return (
    <>
      {/* Référencement : titre et description de la page */}
      <title>{`${titre} | Trouve ton artisan`}</title>
      <meta name="description" content="Liste des artisans de la région Auvergne-Rhône-Alpes." />
      
    <section className="container liste">
      <h1>{titre}</h1>
      <p className="liste__compteur">{compteur}</p>

      {/* message d'erreur si l'api ne répond pas */}
      {erreur && <p role="alert">Impossible de charger les artisans.</p>}
      {!chargement && !erreur && artisans.length === 0 && (               
        <p>Aucun artisan trouvé.</p>                                      
      )}

      <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 list-unstyled">
        {artisans.map((a) => (                                              
          <li className="col" key={a.id_artisan}>
            <CarteArtisan artisan={a} voirFiche />           
          </li>
        ))}
      </ul>
    </section>
    </>

  )
}

export default ListeArtisans