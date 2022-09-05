import React from 'react';

class Ability extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
        <>
          <div>
            <h6 className="mb-0">{this.props.abilityName} {this.props.abilityScore} ({this.props.abilityMod})</h6>
            <p className="mb-0 opacity-75"></p>
          </div>
          <small className="opacity-50 text-end text-nowrap">click to roll</small>
        </>
    );
  }
}

export default Ability;