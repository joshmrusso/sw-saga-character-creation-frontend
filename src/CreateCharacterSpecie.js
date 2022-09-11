import React from 'react';

class CreateCharacterSpecie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [this.props.specie.language]
    }
  }

  render() {
    console.log(this.state.languages[0].basic);

    return(
      <>
        <div className='card'>
          <div className='card-header'>
            <h5 className='text-center'>{this.props.specie.displayName}</h5>
          </div>
          <div className='card-body'>
            <p>{this.props.specie.size}</p>
            <p>{this.props.specie.speed}</p>
            {/* {this.state.languages[0].map((lang) => console.log(lang))} */}
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