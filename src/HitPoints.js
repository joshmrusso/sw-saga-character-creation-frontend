import React from 'react';

class HitPoints extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
<div className="card-group">
                  <div className="card border-0">
                    <div className='card-body'>
                      <h5 className='text-center'>Hit Points <span className='badge bg-secondary opacity-75 rounded-pill'>Max: {this.props.hp}</span></h5>
                      <div className='d-grid col-6 mx-auto'>
                        <div className='btn-group' role={"group"}>
                        <button type="button" className='btn btn-outline-secondary border-0'>-</button>
                        <button type="button" className='btn btn-outline-secondary col-8 border-0' disabled>{this.props.hp}</button>
                        <button type="button" className='btn btn-outline-secondary border-0'>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body">
                      <h5 className='text-center'>Damage Reduction</h5>
                      <ul className="list-group list-group-horizontal">
                      <div className='d-grid col-4 mx-auto'>
                        <div className='btn-group' role={"group"}>
                        <button type="button" className='btn btn-outline-secondary border-0' disabled>{this.props.dr}</button>
                        </div>
                      </div>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body">
                      <h5 className='text-center'>Shield Reduction</h5>
                      <ul className="list-group list-group-horizontal">
                      <div className='d-grid col-4 mx-auto'>
                        <div className='btn-group' role={"group"}>
                        <button type="button" className='btn btn-outline-secondary border-0' disabled>{this.props.sr}</button>
                        </div>
                      </div>
                      </ul>
                    </div>
                  </div>
                </div>
    );
  }
}

export default HitPoints;