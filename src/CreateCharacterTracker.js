import React from 'react';

class CreateCharacterTracker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        <h4>
          Character Abilities: {this.props.abilityInput.map((ability) => {
            let abilityState = ability.abilityName.substring(0, 3) + ': ' + ability.abilityValue + ' '
            if (ability.specieMod != 0) {
              abilityState += '(' + ability.specieMod + ') ';
            }
            return (
              abilityState
            );
          })}<br />
          Character Specie: {this.props.specieInput.charAt(0).toUpperCase() + this.props.specieInput.slice(1)}<br />
          Character Class: {this.props.classInput}
        </h4>
      </div>
    );
  }
}

export default CreateCharacterTracker;