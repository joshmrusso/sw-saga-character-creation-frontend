import React from 'react';
import CombatList from './CombatList.js';

class CombatLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return(
      <div className='card-group'>
      {this.props.combantInfo.map(combantInfo => <CombatList key={combantInfo.id} infoTitle={combantInfo.infoTitle} infoValue={combantInfo.infoValue} />)}
      </div>
    );
  }
}

export default CombatLists;