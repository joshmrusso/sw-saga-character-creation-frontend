import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header.js';
import CreatorButtons from './CreatorButtons.js';
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
      dataIsLoaded: false,
      currentCharacter: []
    };
  }

  homeCharListClick = (visibility, character) => {
    this.setState({characterListVisibility: visibility});
    this.setState({homePageInfoVisibility: visibility});
    this.setState({characterSheetVisibility: !visibility});
    this.state.createCharacterVisibility ? this.setState({createCharacterVisibility: false}) : void(0);
    this.setState({activeCharacter: character});
    console.log(character._id);
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
        {this.state.homePageInfoVisibility ? <CreatorButtons onSelectCreate={this.createClick} /> : null}
        {this.state.characterListVisibility ? <CharacterList characters={this.state.characters} onSelectCharacter={this.homeCharListClick} /> : null}
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
