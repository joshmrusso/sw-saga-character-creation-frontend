import React from 'react';
import Abilities from './Abilities.js';
import Condition from './Condition.js';
import Defenses from './Defenses.js';

class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container px-4 py-5'>
        <h2 className='pb-2 border-bottom text-center'>Character Sheet ({this.props.character})</h2>
        <div className="row">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Character Name" id="character-name" name="character-name" value={this.props.character} readOnly />
            <input type="text" className="form-control" placeholder="Player" id="player" name="player" />
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Species" id="species" name="species" />
            <input type="text" className="form-control" placeholder="Class" id="class-select" name="class" />
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
            <Abilities />
          </div>
          <div className="col gy-2">
            <div className="row">
              <div className="col">
                <Condition />
              </div>
            </div>
            <div className="row">
              <div className="col gy-2">
                <div className="card-group">
                  <div className="card">
                    <div className="card-header">
                      Hit Points
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-horizontal">
                        <li className="list-group-item flex-fill">Total</li>
                        <li className="list-group-item flex-fill">Current</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      DR
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-horizontal">
                        <li className="list-group-item flex-fill">Total</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      SR
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-horizontal">
                        <li className="list-group-item flex-fill">Total</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col gy-2">
                <div className="card-group">
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Initiative</li>
                      <li className="list-group-item" id="initiative">Total</li>
                      <li className="list-group-item">Force Points</li>
                      <li className="list-group-item" id="force-points">FP Total</li>
                    </ul>
                  </div>
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Base Attack</li>
                      <li className="list-group-item" id="base-attack">Total</li>
                      <li className="list-group-item">Speed</li>
                      <li className="list-group-item" id="player-speed">FP Total</li>
                    </ul>
                  </div>
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Perception</li>
                      <li className="list-group-item" id="perception">Total</li>
                      <li className="list-group-item">Destiny Points</li>
                      <li className="list-group-item" id="destiny-points">FP Total</li>
                    </ul>
                  </div>
                </div>
              </div>
            <div className="col-sm-5 gy-2">
              <div className="card-group">
                <div className="card">
                  <div className="card-header">
                    Dmg. Threshold
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Fort Defense</li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    Misc Bonus
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="damage-threshold">
                    Initiative
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item" id="fort-defense">Total</li>
                    </ul>
                  </div>
                  <div className="card-footer" id="damage-misc-bonus">
                    Force Points
                  </div>
                </div>
              </div>
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
              <div className="card">
                <div className="card-header">
                  Second Wind
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item flex-fill">Uses/Day</li>
                    <li className="list-group-item flex-fill">Total</li>
                    <li className="list-group-item flex-fill">Bonus HP</li>
                    <li className="list-group-item flex-fill">Str</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheet;