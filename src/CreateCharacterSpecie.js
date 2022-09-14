import React from 'react';

class CreateCharacterSpecie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [this.props.specie.language],
      abilityAdjs: [this.props.specie.abilityAdj]
    }
  }

  render() {
    // console.log(Object.keys(this.state.languages[0])[0]);

    return(
      <div className='col'>
        <div className='card'>
          <div className='card-header'>
            <h5 className='text-center'>{this.props.specie.displayName}</h5>
          </div>
          <div className='card-body'>
            <dl className='row'>
              <dt className='col-sm-4'>Size:</dt>
              <dd className='col-sm-8'>{this.props.specie.size.charAt(0).toUpperCase() + this.props.specie.size.slice(1)}</dd>
              <dt className='col-sm-4'>Speed:</dt>
              <dd className='col-sm-8'>{this.props.specie.speed}</dd>
              <dt className='col-sm-4'>Languages:</dt>
              {this.state.languages.map((lang) => {
                var langList = "";
                var langArray = [];
                for (var i = 0; i < Object.keys(lang).length; i++) {
                  if (lang[Object.keys(lang)[i]].exception) {
                    langArray.push(lang[Object.keys(lang)[i]].displayName + " (" + lang[Object.keys(lang)[i]].exception + ")");
                  } else {
                    langArray.push(lang[Object.keys(lang)[i]].displayName);
                  }
                }
                {langList = langArray.map((lan) => {
                  return(
                    <span key={this.props.specie._id + langArray.indexOf(lan)}>{lan}<br /></span>
                  );
                })}
                return(<dd className='col-sm-8' key={this.props.specie._id}><p>{langList}</p></dd>);
              })}
            </dl>
          </div>
            {this.state.abilityAdjs.map((ability) => {
              if (ability) {
                var abilityAdj = "(";
                for (var i = 0; i < Object.keys(ability).length; i++) {
                  abilityAdj += Object.keys(ability)[i].toUpperCase() + ": ";
                  abilityAdj += ability[Object.keys(ability)[i]];
                  if (i == Object.keys(ability).length - 1) {
                    abilityAdj += ")"
                  } else {
                    abilityAdj += ", "
                  }
                }
                return(
                  <div key={this.props.specie._id} className="card-footer text-center">
                    {abilityAdj}
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

export default CreateCharacterSpecie;