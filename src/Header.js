import React from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    handleCharListVis = (character) => {
      this.props.onSelectCharacter(false, character);
    }

    handleHomeClick = () => {
      this.props.onSelectHome(true);
    }

    render() {
      return (
  
        <header className="p-3 text-bg-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
              </a>
      
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 text-secondary" onClick={() => { this.handleHomeClick()}}>Home</a></li>
                <li className='nav-item dropdown'>
                  <a href="#" role={"button"} className="nav-link px-2 text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Characters</a>
                  <ul className='dropdown-menu'>
                    {this.props.characters.map(character => 
                      <li key={character._id}><a className='dropdown-item' href='#' onClick={() => { this.handleCharListVis(character); }}>{character['character-name']}</a></li>
                    )}
                  </ul>
                </li>
                {/* {console.log(this.props.characters)} */}
                {/* <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li> */}
                {/* <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li> */}
                {/* <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
              </ul>
      
              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign-up</button>
              </div>
            </div>
          </div>
        </header>
      );
    }
  }

export default Header;