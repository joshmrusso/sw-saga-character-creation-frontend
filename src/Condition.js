import React from 'react';

class Condition extends React.Component {
  render() {
    return (
      <>
        <h3 className='text-center border-bottom'>Condition Tracker</h3>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item list-group-item-action flex-fill list-group-item-success status-normal status-check">Normal</li>
          <li className="list-group-item list-group-item-action flex-fill status-one status-check">-1</li>
          <li className="list-group-item list-group-item-action flex-fill status-two status-check">-2</li>
          <li className="list-group-item list-group-item-action flex-fill status-five status-check">-5</li>
          <li className="list-group-item list-group-item-action flex-fill status-ten status-check">-10</li>
          <li className="list-group-item list-group-item-action flex-fill status-helpless status-check">Helpless</li>
        </ul>
      </>
    );
  }
}

export default Condition;