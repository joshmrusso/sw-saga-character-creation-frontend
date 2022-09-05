import React from 'react';

class CombatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return(
      <div className="card border-0" key={this.props.id}>
        <div className="card-body">
          <h5 className='text-center'>{this.props.infoTitle}</h5>
          <ul className="list-group list-group-horizontal">
          <div className='d-grid col-8 mx-auto'>
            <div className='btn-group' role={"group"}>
            <button type="button" className='btn btn-outline-secondary border-0' disabled>{this.props.infoValue}</button>
            </div>
          </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default CombatList;