import { Component } from 'react';
import starWarsData from '../starwarsData';
import Planet from '../components/Planet';

class Planets extends Component {
  constructor() {
    super();
    this.state = {
      planets: starWarsData.planets,
    };
  }

  render() {
    return (
      <div className="planets">
        {this.state.planets.map((planet, i) => (
          <Planet planet={planet} key={i} />
        ))}
      </div>
    );
  }
}

export default Planets;