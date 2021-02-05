function OneSpecies(props) {
  // console.log('one species: ', props);
  return (
    <div className="one-species" onClick={() => props.handleClick(props.oneSpecies)}>
      <img src={props.oneSpecies.pic} alt={props.oneSpecies.name} />
      <div className="container">
        <h4 className="name">{props.oneSpecies.name}</h4>
        <p>
          <i>Home PLanet:</i>{props.oneSpecies.homePlanet}
        </p>
        <p>
          <i>Characteristic:</i>{props.oneSpecies.characteristic}
        </p>
        <p>
          <i>Know Characters:</i>{props.oneSpecies.knownCharacters}
        </p>

      </div>
    </div>
  )
}

export default OneSpecies;