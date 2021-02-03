function Planet(props) {
  console.log(props.planet);
  return (
    <div className="planet">
      <img src={props.planet.pic} alt={props.planet.name} />
      <div className="container">
        <h4 className="name">
          <strong>{props.planet.name}</strong>
        </h4>
        <p>
          <i>Firs appearence: </i>{props.planet.firstMovie}
        </p>
        <p>
          <i>Description: </i>{props.planet.desc}
        </p><p>
          <i>Species: </i>{props.planet.species}
        </p><p>
          <i>Population: </i>{props.planet.population}
        </p>
      </div>
    </div>
  )
}

export default Planet;