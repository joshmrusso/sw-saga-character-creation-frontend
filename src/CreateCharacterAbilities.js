import React from 'react';
import CreateCharacterAbility from './CreateCharacterAbility.js';

class CreateCharacterAbilities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      {this.props.abilityInput.map( (ability) => 
        <div className='row mb-3' key={ability.id}>
          <CreateCharacterAbility inputValue={ability.abilityValue} inputName={ability.abilityName} inputMod={ability.abilityMod} inputId={ability.id} handleChange={this.props.handleInputChange} increaseAbility={this.props.increaseAbility} />
        </div>
        ) }
      </>
    );
  }
}

export default CreateCharacterAbilities;