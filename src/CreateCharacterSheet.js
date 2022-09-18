import React from 'react';
import CreateCharacterAbilities from './CreateCharacterAbilities.js';
import CreateCharacterSpecies from './CreateCharacterSpecies.js';
import CreateCharacterClasses from './CreateCharacterClasses.js';

class CreateCharacterSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strengthInput: 0,
      strengthMod: "",
      abilityInput: [
        {
          id: 0,
          abilityName: "STRength",
          abilityValue: 0,
          abilityMod: 0
        },
        {
          id: 1,
          abilityName: "DEXterity",
          abilityValue: 0,
          abilityMod: 0
        },
        {
          id: 2,
          abilityName: "CONstitution",
          abilityValue: 0,
          abilityMod: 0
        },
        {
          id: 3,
          abilityName: "INTelligence",
          abilityValue: 0,
          abilityMod: 0
        },
        {
          id: 4,
          abilityName: "WISdom",
          abilityValue: 0,
          abilityMod: 0
        },
        {
          id: 5,
          abilityName: "CHArisma",
          abilityValue: 0,
          abilityMod: 0
        },
      ],
      classInput: "",
      specieInput: "",
      abilityVisibility: true,
      specieVisibility: false,
      classVisibility: false,
      charName: "Character Name",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateSpecieChoice = this.updateSpecieChoice.bind(this);
    this.updateClassChoice = this.updateClassChoice.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let modValue = Math.floor((value - 10) / 2);
    let abilityScores = this.state.abilityInput;
    abilityScores[name].abilityValue = value;
    abilityScores[name].abilityMod = modValue;
    
    this.setState({
      abilityInput: abilityScores
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ');
    event.preventDefault();
  }

  creatorPageClick = (event, page) => {
    event.preventDefault();
    this.setState({abilityVisibility: false});
    this.setState({specieVisibility: false});
    this.setState({classVisibility: false});
    if (page == "specie") {
      this.setState({specieVisibility: true});
    } else if (page == "class") {
      this.setState({classVisibility: true});
    } else if (page == "ability") {
      this.setState({abilityVisibility: true});
    }
  }

  updateClassChoice(classChoice) {
    this.setState({
      classInput: classChoice
    });
  }
  
  updateSpecieChoice(specieChoice) {
    this.setState({
      specieInput: specieChoice
    });
  }
  
  render() {
    return (
      <>
      <div className="px-4 py-5 my-5 text-center">
          <h1 className='display-5 fw-bold'>Character Creator: Abilities</h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>Please adjust the sliders for the correct ability levels.</p>
          </div>
        </div>
      <div className='container px-4 py-5'>
        <form onSubmit={this.handleSubmit}>
          {this.state.abilityVisibility ? <CreateCharacterAbilities abilityInput={this.state.abilityInput} handleInputChange={this.handleInputChange} /> : null}
          {this.state.specieVisibility ? <CreateCharacterSpecies specieInput={this.state.specieInput} updateSpecieChoice={this.updateSpecieChoice} /> : null}
          {this.state.classVisibility ? <CreateCharacterClasses classInput={this.state.classInput} updateClassChoice={this.updateClassChoice} /> : null}
          <div className='row px-4 py-3'>
            <div className='col'>
              <button className='btn btn-info' id='abilities' onClick={event => this.creatorPageClick(event, 'ability')}>Set Abilities</button>
            </div>
            <div className='col'>
              <button className='btn btn-info' id='specie' onClick={event => this.creatorPageClick(event, 'specie')}>Choose Species</button>
            </div>
            <div className='col'>
              <button className='btn btn-info' id='class' onClick={event => this.creatorPageClick(event, 'class')}>Choose Class</button>
            </div>
          </div>
          <input className='btn btn-primary' type={"submit"} value="Create Character" />
        </form>
      </div>
      </>
    );
  }
}

export default CreateCharacterSheet;
// handleInputChange={(event) => this.handleInputChange(event)} 