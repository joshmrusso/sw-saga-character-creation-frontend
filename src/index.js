import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import CharacterSheet from './CharacterSheet.js';
import CreateCharacterSheet from './CreateCharacterSheet.js';
import reportWebVitals from './reportWebVitals';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
      ],
      activeCharacter: null,
      homePageInfoVisibility: true,
      characterListVisibility: true,
      characterSheetVisibility: false,
      createCharacterVisibility: false,
      dataIsLoaded: false
    };
  }

  homeCharListClick = (visibility, character) => {
    this.setState({characterListVisibility: visibility});
    this.setState({homePageInfoVisibility: visibility});
    this.setState({characterSheetVisibility: !visibility});
    this.state.createCharacterVisibility ? this.setState({createCharacterVisibility: false}) : void(0);
    this.setState({activeCharacter: character});
  }

  homeClick = (visibility) => {
    this.setState({characterListVisibility: visibility});
    this.setState({homePageInfoVisibility: visibility});
    this.setState({characterSheetVisibility: !visibility});
    this.setState({createCharacterVisibility: !visibility});
  }

  createClick = (visibility) => {
    this.setState({characterListVisibility: visibility});
    this.setState({homePageInfoVisibility: visibility});
    this.setState({createCharacterVisibility: !visibility});
  }

  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          characters: json,
          dataIsLoaded: true
        });
      });
  }

  render() {
    return (
      <div>
        <Header characters={this.state.characters} onSelectCharacter={this.homeCharListClick} onSelectHome={this.homeClick} />
        {this.state.homePageInfoVisibility ? 
        <div className="px-4 py-5 my-5 text-center">
          <h1 className='display-5 fw-bold'>Star Wars Saga Character Creator</h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>Quickly create and manage your campaign characters for the Star Wars Saga Edition TTRPG</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onClick={() => { this.createClick(false)}}>Create Character</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Modify Character</button>
            </div>
          </div>
        </div> : null}
        {this.state.characterListVisibility ? 
          <CharacterList characters={this.state.characters} onSelectCharacter={this.homeCharListClick} /> 
          : null }
        {this.state.characterSheetVisibility ? <CharacterSheet character={this.state.activeCharacter} /> : null}
        {this.state.createCharacterVisibility ? <CreateCharacterSheet /> : null}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Game />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
