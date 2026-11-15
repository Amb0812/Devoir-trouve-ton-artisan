import useFicheArtisan from '../logique/useFicheArtisan.js'
import Etoiles from '../composants/Etoiles.jsx'

function FicheArtisan() {
  const { artisan, chargement, erreur, champs, statut, modifier, envoyer } = useFicheArtisan()

  if (chargement) return <p className="container fiche">Chargement...</p>
  if (erreur || !artisan) {
    return <p className="container fiche" role="alert">Artisan introuvable.</p>
  }

  return (
    <article className="container fiche">
      <div className="row">
        <div className="col-12 col-md-5">
          <img className="fiche__image" src="/artisan.png" alt="" />
        </div>
        <div className="col-12 col-md-7">
          <h1>{artisan.nom}</h1>
          <Etoiles note={artisan.note} />
          <p className="fiche__specialite">{artisan.Specialite.nom}</p>
          <p className="fiche__ville">{artisan.ville}</p>
          {artisan.site_web && (
            <a className="fiche__site" href={artisan.site_web}
              target="_blank" rel="noopener noreferrer">
              {artisan.site_web}
            </a>
          )}
        </div>
      </div>

      <div className="row fiche__bas">
        <section className="col-12 col-lg-7">
          <h2>À propos</h2>
          <p>{artisan.a_propos}</p>
        </section>

        <section className="col-12 col-lg-5">
          <form className="contact" onSubmit={envoyer}>
            <h2>Contacter l'artisan</h2>

            <label className="form-label" htmlFor="nom">Nom</label>
            <input className="form-control" id="nom" name="nom" type="text"
              value={champs.nom} onChange={modifier} maxLength="100" required />

            <label className="form-label" htmlFor="email">E-mail</label>
            <input className="form-control" id="email" name="email" type="email"
              value={champs.email} onChange={modifier} maxLength="150" required />

            <label className="form-label" htmlFor="objet">Objet</label>
            <input className="form-control" id="objet" name="objet" type="text"
              value={champs.objet} onChange={modifier} maxLength="150" required />

            <label className="form-label" htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" rows="5"
              value={champs.message} onChange={modifier} maxLength="2000" required />

            <button className="btn btn-primary" type="submit" disabled={statut === 'envoi'}>
              Envoyer
            </button>

            {statut === 'ok' && <p role="status">Votre message a bien été envoyé.</p>}
            {statut === 'erreur' && <p role="alert">Le message n'a pas pu être envoyé.</p>}
          </form>
        </section>
      </div>
    </article>
  )
}

export default FicheArtisan