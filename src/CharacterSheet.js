import React from 'react';
import Abilities from './Abilities.js';
import Condition from './Condition.js';
import Defenses from './Defenses.js';
import SecondWind from './SecondWind.js';
import HitPoints from './HitPoints.js';
import DamageThreshold from './DamageThreshold.js';
import CombatLists from './CombatLists.js';

class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      combatInformation: [
        {
          id: 1,
          infoTitle: "Initiative",
          infoValue: 20
        },
        {
          id: 2,
          infoTitle: "Force Points",
          infoValue: 20
        },
        {
          id: 3,
          infoTitle: "Base Attack",
          infoValue: 20
        }
      ],
      attackInformation: [
        {
          id: 1,
          infoTitle: "Speed",
          infoValue: this.props.character.speed
        },
        {
          id: 2,
          infoTitle: "Perception",
          infoValue: 20
        },
        {
          id: 3,
          infoTitle: "Destiny Points",
          infoValue: 20
        }
      ]
    };
  }

  render() {
    const characterLevel = [this.props.character['class-level']];
    let charLevel = "";
    console.log(charLevel);
    characterLevel.forEach((classData, i) => {
      charLevel += classData.class['class-name'].charAt(0).toUpperCase() + classData.class['class-name'].slice(1) + " " + classData.class['level'];
      if (i > 0) {
        charLevel += " / ";
      }
    });

    console.log(this.props.character);
    return (
      <div className='container px-4 py-5'>
        <h2 className='pb-2 border-bottom text-center'>Character Sheet ({this.props.character['character-name']})</h2>
        <div className="row">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Character Name" id="character-name" name="character-name" value={this.props.character['character-name']} readOnly />
            <input type="text" className="form-control" placeholder="Player" id="player" name="player" />
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Species" id="species" name="species" value={this.props.character.specie.charAt(0).toUpperCase() + this.props.character.specie.slice(1)} readOnly />
            <input type="text" className="form-control" placeholder="Class" id="class-select" name="class" value={charLevel} readOnly />
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Age" id="age" />
            <input type="text" className="form-control" placeholder="Gender" id="gender" />
            <input type="text" className="form-control" placeholder="Height" id="height" />
            <input type="text" className="form-control" placeholder="Weight" id="weight" />
            <input type="text" className="form-control" placeholder="Destiny" id="destiny" />
            <input type="text" className="form-control" placeholder="Ecl" id="ecl" />
          </div>
        </div>
        <div className='row'>
          <div className="col-sm-3 gy-2">
            <Abilities abilities={this.props.character.abilities} />
          </div>
          <div className="col gy-2">
            <div className="row">
              <div className="col">
                <Condition />
              </div>
            </div>
            <div className="row">
              <div className="col gy-2">
                <h3 className='pb-2 border-bottom text-center'>Combat, Movement &amp; Hit Points</h3>
                <HitPoints />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <CombatLists combantInfo={this.state.combatInformation} />
                <CombatLists combantInfo={this.state.attackInformation} />
              </div>
              <div className="col-sm-5 gy-2">
                <DamageThreshold />
              </div>
            </div>
          </div>
        </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col gy-5">
              <Defenses />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col gy-5">
              <SecondWind />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheet;