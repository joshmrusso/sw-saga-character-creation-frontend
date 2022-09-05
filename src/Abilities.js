import React from 'react';
import Ability from './Ability.js';

class Abilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abilities: [{
        id: 1,
        abilityName: "STRength",
        abilityScore: "10",
        abilityMod: "0"
      },{
        id: 2,
        abilityName: "DEXterity",
        abilityScore: "10",
        abilityMod: "0"
      },{
        id: 3,
        abilityName: "CONstitution",
        abilityScore: "10",
        abilityMod: "0"
      },{
        id: 4,
        abilityName: "INTelligence",
        abilityScore: "10",
        abilityMod: "0"
      },{
        id: 5,
        abilityName: "WISdom",
        abilityScore: "10",
        abilityMod: "0"
      },{
        id: 6,
        abilityName: "CHArisma",
        abilityScore: "10",
        abilityMod: "0"
      }
    ]};
  }
  render () {
    return(
      <div>
        <h3 className='text-center border-bottom'>Abilities</h3>
        <div className='list-group w-auto'>
          {this.state.abilities.map( (ability) => 
            <div className='list-group-item list-group-item-action d-flex gap-3 py-3' key={ability.id}>
            <Ability 
            abilityName={ability.abilityName} 
            abilityScore={ability.abilityScore} 
            abilityMod={ability.abilityMod} 
            id={ability.id} />
            </div>)
          }
        </div>
      </div>
    );
  }
}

export default Abilities;