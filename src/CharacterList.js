import React from 'react';

class CharacterList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    handleCharListVis = (character) => {
      this.props.onSelectCharacter(false, character);
    }

    render() {
      return(
          <div className='bg-dark text-secondary px-4 py-5 text-center'>
            <div className='py-5'>
              <h1 className='display-5 fw-bold text-white'>Recent Character List</h1>
              <div className='col-lg-2 mx-auto'>
                <div className="list-group w-auto">
                {this.props.characters.map(character => 
                  <a href="#" onClick={() => { this.handleCharListVis(character.name); }} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true" key={character.id}>
                    <img src='https://github.com/twbs.png' alt='twbs' width={"32"} height={"32"} className="rounded-circle flex-shrink-0" />
                    <div className="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 className="mb-0">{character.name}</h6>
                        <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small className="opacity-50 text-nowrap">now</small>
                    </div>
                  </a>
                )}
                </div>
              </div>
            </div>
          </div>
      );
    }
  }

export default CharacterList;