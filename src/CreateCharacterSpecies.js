import React from 'react';
import CreateCharacterSpecie from './CreateCharacterSpecie';

class CreateCharacterSpecies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      dataIsLoaded: false
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/species/all")
      .then((res) => res.ok ? res.json(): Promise.reject())
      .then((json) => {
        this.setState({
          species: json,
          dataIsLoaded: true
        });
      });
  }

  render() {
    return(
      <>
        {this.state.species.map( (specie) => <CreateCharacterSpecie key={specie._id} specie={specie} />)}
      </>
    );
  }
}

export default CreateCharacterSpecies;