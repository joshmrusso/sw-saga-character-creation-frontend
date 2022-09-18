import React from 'react';
import Ability from './Ability.js';

class Abilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abilities: [{
        id: 1,
        abilityName: "STRength",
        abilityScore: this.props.abilities.str,
        abilityMod: Math.floor((this.props.abilities.str - 10) / 2)
      },{
        id: 2,
        abilityName: "DEXterity",
        abilityScore: this.props.abilities.dex,
        abilityMod: Math.floor((this.props.abilities.dex - 10) / 2)
      },{
        id: 3,
        abilityName: "CONstitution",
        abilityScore: this.props.abilities.con,
        abilityMod: Math.floor((this.props.abilities.con - 10) / 2)
      },{
        id: 4,
        abilityName: "INTelligence",
        abilityScore: this.props.abilities.int,
        abilityMod: Math.floor((this.props.abilities.int - 10) / 2)
      },{
        id: 5,
        abilityName: "WISdom",
        abilityScore: this.props.abilities.wis,
        abilityMod: Math.floor((this.props.abilities.wis - 10) / 2)
      },{
        id: 6,
        abilityName: "CHArisma",
        abilityScore: this.props.abilities.cha,
        abilityMod: Math.floor((this.props.abilities.cha - 10) / 2)
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