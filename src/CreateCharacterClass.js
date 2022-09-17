import React from 'react';

class CreateCharacterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clas: this.props.clas,
      defBonus: [this.props.clas.defenseBonus]
    }
  }

  render() {
    // console.log(this.state.clas);
    return(
      <div className='col'>
        <div className='card'>
          <div className='card-header'>
            <h3>{this.state.clas.className}</h3>
          </div>
          <div className='card-body'>
            <dl className='row'>
              <dt className='col-sm-4'>Starting Credits:</dt>
              <dd className='col-sm-8'>{this.state.clas.credits}</dd>
              <dt className='col-sm-4'>Starting Force Points:</dt>
              <dd className='col-sm-8'>{this.state.clas.forcePoints} + INT modifier</dd>
              <dt className='col-sm-4'>Starting Hit Points:</dt>
              <dd className='col-sm-8'>{this.state.clas.startingHitPoints} + CON modifier</dd>
              <dt className='col-sm-4'>Hit Points per Level:</dt>
              <dd className='col-sm-8'>{this.state.clas.hitPoints} + CON modifier</dd>
              <dt className='col-sm-4'>Starting Feats:</dt>
              <dd className='col-sm-8'>
              {this.state.clas.startingFeats.map((feat) => {
                return(
                <span key={this.state.clas.startingFeats.indexOf(feat)}>{feat}<br /></span>
                );
              })}
              </dd>
              <dt className='col-sm-4'>Class Skills:</dt>
              <dd className='col-sm-8'>
              {this.state.clas.classSkills.map((skill) => {
                return(
                <span key={this.state.clas.classSkills.indexOf(skill)}>{skill}, </span>
                );
              })}
              </dd>
              <dt className='col-sm-4'>Defense Bonus:</dt>
              <dd className='col-sm-8'>
              {this.state.defBonus.map((bonus) => {
                if (bonus) {
                  var defBonus = "";
                  for (var i = 0; i < Object.keys(bonus).length; i++) {
                    defBonus += Object.keys(bonus)[i] + ' (+';
                    defBonus += bonus[Object.keys(bonus)[i]] + ') ';
                  }
                }
                return(
                <span key={this.state.defBonus.indexOf(bonus)}>{defBonus}</span>
                );
              })}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCharacterClass;