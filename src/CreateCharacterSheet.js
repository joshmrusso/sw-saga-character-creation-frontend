import React from 'react';
import CreateCharacterAbility from './CreateCharacterAbility.js';

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
      value: "Character Name",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
          {this.state.abilityInput.map( (ability) => 
            <div className='row mb-3' key={ability.id}>
              <CreateCharacterAbility inputValue={ability.abilityValue} inputName={ability.abilityName} inputMod={ability.abilityMod} inputId={ability.id} handleChange={this.handleInputChange} />
            </div>
            ) }
          <input className='btn btn-primary' type={"submit"} value="Submit" />
        </form>
      </div>
      </>
    );
  }
}

export default CreateCharacterSheet;
// handleInputChange={(event) => this.handleInputChange(event)} 