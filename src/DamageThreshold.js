import React from 'react';

class DamageThreshold extends React.Component {
  render () {
    return(
      <div className='list-group-item'>
        <h6 className='text-center fs-4'>Damage Threshold</h6>
        <ul className='list-group list-group-horizontal text-center border'>
          <li className='list-group-item list-group-item-action border-0'>14<span className='badge bg-secondary opacity-75 position-absolute top-100 start-50 translate-middle rounded-pill'>total</span></li>
          <li className='list-group-item border-0'>=</li>
          <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary opacity-75 position-absolute top-100 start-50 translate-middle rounded-pill'>fortitude</span></li>
          <li className='list-group-item border-0'>+</li>
          <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary opacity-75 position-absolute top-100 start-50 translate-middle rounded-pill'>misc</span></li>
        </ul>
        <p className="mb-0 opacity-75"></p>
      </div>
    );
  }
}

export default DamageThreshold;