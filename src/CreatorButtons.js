import React from 'react';

class CreatorButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCharListVis = () => {
    this.props.onSelectCreate(false);
  }

  render() {
    return(
      <div className="px-4 py-5 my-5 text-center">
        <h1 className='display-5 fw-bold'>Star Wars Saga Character Creator</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>Quickly create and manage your campaign characters for the Star Wars Saga Edition TTRPG</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onClick={() => { this.handleCharListVis(); }}>Create Character</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Modify Character</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatorButtons;