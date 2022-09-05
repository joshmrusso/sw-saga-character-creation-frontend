import React from 'react';

class HitPoints extends React.Component {
  render () {
    return(
<div className="card-group">
                  <div className="card border-0">
                    <div className='card-body'>
                      <h5 className='text-center'>Hit Points <span className='badge bg-secondary opacity-75 rounded-pill'>Max: 20</span></h5>
                      <div className='d-grid col-6 mx-auto'>
                        <div className='btn-group' role={"group"}>
                        <button type="button" className='btn btn-outline-secondary border-0'>-</button>
                        <button type="button" className='btn btn-outline-secondary col-8 border-0' disabled>20</button>
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
                        <button type="button" className='btn btn-outline-secondary border-0' disabled>20</button>
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
                        <button type="button" className='btn btn-outline-secondary border-0' disabled>20</button>
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