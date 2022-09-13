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
      <>
        <div className='card'>
          <div className='card-header'>
            <h5 className='text-center'>{this.props.specie.displayName}</h5>
          </div>
          <div className='card-body'>
            <p>Size: {this.props.specie.size.charAt(0).toUpperCase() + this.props.specie.size.slice(1)}
            <br />
            Speed: {this.props.specie.speed}</p>
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
                  <li key={this.props.specie._id + langArray.indexOf(lan)}>{lan}</li>
                );
              })}
              return(<ul key={this.props.specie._id}>{langList}</ul>);
            })}
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
                return(<p key={this.props.specie._id}>{abilityAdj}</p>);
              }
            })}
          </div>
        </div>
      </>
    );
  }
}

export default CreateCharacterSpecie;