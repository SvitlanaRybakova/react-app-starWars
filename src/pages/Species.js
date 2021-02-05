import { Component } from 'react';
import starwarsData from '../starwarsData';
import OneSpecies from '../components/OneSpecies';

class Species extends Component {
  constructor() {
    super();
    this.state = {
      species: starwarsData.species,
      favoritSpecies:[],
    }
  }
  handleClickInChild = (species) =>{
    console.log('You clicked this card in child: ', species);

  }

  render() {
    console.log('species: ', this.state.species);
    return (
      <div className="species">
        {this.state.species.map((oneSpecies, i) => (
          <OneSpecies oneSpecies={oneSpecies} key={i} 
          handleClick={this.handleClickInChild}/>
        ))}
      </div>
    )
  }
}

export default Species;