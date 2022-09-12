import React from 'react';

class CreateCharacterSpecie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [this.props.specie.language]
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
            <p>{this.props.specie.size}</p>
            <p>{this.props.specie.speed}</p>
            {this.state.languages.map((lang) => {
              var langList = "";
              var langArray = [];
              var langExcept = [];
              for (var i = 0; i < Object.keys(lang).length; i++) {
                // langArray.push(lang[Object.keys(lang)[i]].displayName);
                if (lang[Object.keys(lang)[i]].exception) {
                  langArray.push(lang[Object.keys(lang)[i]].displayName + " (" + lang[Object.keys(lang)[i]].exception + ")");
                } else {
                  langArray.push(lang[Object.keys(lang)[i]].displayName);
                }
              }
              // console.log(Object.keys(lang));
              {langList = langArray.map((lan) => {
                console.log(Object.keys(lan));
                return(
                  <li key={Object.keys(lan)}>{lan}</li>
                );
              })}
              return(<ul>{langList}</ul>);
              // console.log(langArray);
              // return (langArray);
              // return (langDisplay);
            })}
            {/* <p>{this.state.languages}</p> */}
            {/* {this.state.languages.map( (lang) => console.log(lang))} */}
            {/* <p>{this.props.specie.abilityAdj}</p> */}
            {/* {console.log(this.state.languages)} */}
          </div>
        </div>
      </>
    );
  }
}

export default CreateCharacterSpecie;