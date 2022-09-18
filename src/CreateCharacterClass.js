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

    let classCssClass = "";
    let classCssTextClass = "";
    if (this.props.classInput == this.props.clas.className) {
      classCssClass = "card border-success";
      classCssTextClass = "card-body text-success";
    } else {
      classCssClass = "card";
      classCssTextClass = "card-body";
    }

    return(
      <div className='col'>
        <div className={classCssClass} onClick={() => {this.props.updateClassChoice(this.state.clas.className)}}>
          <div className='card-header'>
            <h3>{this.state.clas.className}</h3>
          </div>
          <div className={classCssTextClass}>
            <dl className='row'>
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
              <dt className='col-sm-4'>Starting Hit Points:</dt>
              <dd className='col-sm-8'>{this.state.clas.startingHitPoints} + CON modifier</dd>
              <dt className='col-sm-4'>Starting Feats:</dt>
              <dd className='col-sm-8'>
              {this.state.clas.startingFeats.map((feat) => {
                return(
                <span key={this.state.clas.startingFeats.indexOf(feat)}>{feat}<br /></span>
                );
              })}
              </dd>
              <dt className='col-sm-4'>Force Points each Level:</dt>
              <dd className='col-sm-8'>{this.state.clas.forcePoints} + 1/2 character level</dd>
              <dt className='col-sm-4'>Hit Points per Level:</dt>
              <dd className='col-sm-8'>{this.state.clas.hitPoints} + CON modifier</dd>
              <dt className='col-sm-4'>Starting Skills:</dt>
              <dd className='col-sm-8'>{this.state.clas.startingSkills} + INT modifier</dd>
              <dt className='col-sm-4'>Class Skills:</dt>
              <dd className='col-sm-8'>
              {this.state.clas.classSkills.map((skill) => {
                return(
                <span key={this.state.clas.classSkills.indexOf(skill)}>{skill}, </span>
                );
              })}
              </dd>
              <dt className='col-sm-4'>Starting Credits:</dt>
              <dd className='col-sm-8'>{this.state.clas.credits}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCharacterClass;