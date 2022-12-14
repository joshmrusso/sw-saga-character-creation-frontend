import React from 'react';
import CreateCharacterAbilities from './CreateCharacterAbilities.js';
import CreateCharacterSpecies from './CreateCharacterSpecies.js';
import CreateCharacterClasses from './CreateCharacterClasses.js';
import CreateCharacterTracker from './CreateCharacterTracker.js';

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
          abilityMod: 0,
          specieMod: 0
        },
        {
          id: 1,
          abilityName: "DEXterity",
          abilityValue: 0,
          abilityMod: 0,
          specieMod: 0
        },
        {
          id: 2,
          abilityName: "CONstitution",
          abilityValue: 0,
          abilityMod: 0,
          specieMod: 0
        },
        {
          id: 3,
          abilityName: "INTelligence",
          abilityValue: 0,
          abilityMod: 0,
          specieMod: 0
        },
        {
          id: 4,
          abilityName: "WISdom",
          abilityValue: 0,
          abilityMod: 0,
          specieMod: 0
        },
        {
          id: 5,
          abilityName: "CHArisma",
          abilityValue: 0,
          abilityMod: 0,
          specieMod: 0
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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    event.preventDefault();
    if (this.state.specieInput == "") {
      console.log("Please choose a specie");
    } else if (this.state.classInput == "") {
      console.log("Please choose a class");
    }
    alert('A name was submitted: ');
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
  
  updateSpecieChoice(specieChoice, specieMod) {
    // console.log(specieMod);
    let abIn = this.state.abilityInput;
    for (var i = 0; i < abIn.length; i++) {
      abIn[i].specieMod = 0;
    }
    specieMod.map((ability) => {
      if (ability) {
        for (var i = 0; i < Object.keys(ability).length; i++) {
          let abilityAdj = Object.keys(ability)[i].toUpperCase();
          for (var j = 0; j < this.state.abilityInput.length; j++) {
            if (abilityAdj == this.state.abilityInput[j].abilityName.substring(0, 3))  {
              abIn[j].specieMod = ability[Object.keys(ability)[i]];
            }
          }
        }
      }
    });
    this.setState({
      specieInput: specieChoice,
      abilityInput: abIn
    });
    // console.log(this.state.abilityInput);
  }
  
  render() {
    return (
      <>
        <div className="px-4 py-4 text-center bg-light">
          <h1 className='display-5 fw-bold'>
            Character Creator: 
            {this.state.abilityVisibility ? " Abilities" : null}
            {this.state.specieVisibility ? " Species" : null}
            {this.state.classVisibility ? " Classes" : null}
          </h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-2'>
              {this.state.abilityVisibility ? "Please adjust the sliders for the correct ability levels." : null}
              {this.state.specieVisibility ? "Please choose a species." : null}
              {this.state.classVisibility ? "Please choose a class." : null}
            </p>
          </div>
        </div>
        <div className='container px-4 py-2'>
            <CreateCharacterTracker abilityInput={this.state.abilityInput} classInput={this.state.classInput} specieInput={this.state.specieInput} />
          <div className='row px-4 py-2'>
            <div className='col text-center'>
              <button className='btn btn-info' id='abilities' onClick={event => this.creatorPageClick(event, 'ability')}>Set Abilities</button>
            </div>
            <div className='col text-center'>
              <button className='btn btn-info' id='specie' onClick={event => this.creatorPageClick(event, 'specie')}>Choose Species</button>
            </div>
            <div className='col text-center'>
              <button className='btn btn-info' id='class' onClick={event => this.creatorPageClick(event, 'class')}>Choose Class</button>
            </div>
          </div>
        </div>
        <div className='container px-4 py-5'>
          <form onSubmit={this.handleSubmit}>
            {this.state.abilityVisibility ? <CreateCharacterAbilities abilityInput={this.state.abilityInput} handleInputChange={this.handleInputChange} /> : null}
            {this.state.specieVisibility ? <CreateCharacterSpecies specieInput={this.state.specieInput} updateSpecieChoice={this.updateSpecieChoice} /> : null}
            {this.state.classVisibility ? <CreateCharacterClasses classInput={this.state.classInput} updateClassChoice={this.updateClassChoice} /> : null}
            <input className='btn btn-primary' type={"submit"} value="Create Character" />
          </form>
        </div>
      </>
    );
  }
}

export default CreateCharacterSheet;
// handleInputChange={(event) => this.handleInputChange(event)} 