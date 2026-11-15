function Etoiles({ note }) {
  return (
    <p className="etoiles" aria-label={`Note : ${note} sur 5`}>
      <span aria-hidden="true">★★★★★</span>
      <small>{note}</small>
    </p>
  )
}

export default Etoiles