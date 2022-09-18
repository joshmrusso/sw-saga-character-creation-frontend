import React from 'react';
import CreateCharacterSpecie from './CreateCharacterSpecie';

class CreateCharacterSpecies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      dataIsLoaded: false,
      specieInput: ""
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
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {this.state.species.map( (specie) => <CreateCharacterSpecie key={specie._id} specie={specie} specieInput={this.props.specieInput} updateSpecieChoice={this.props.updateSpecieChoice} />)}
        <input type='hidden' id="specieChoice" name='specieChoice' value={this.props.specieInput} />
      </div>
    );
  }
}

export default CreateCharacterSpecies;