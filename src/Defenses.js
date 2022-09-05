import React from 'react';

class Defenses extends React.Component {
  render () {
    const reflexMath = "14 { 10"

    return(
      <>
        <h3 className='text-center border-bottom'>Defenses</h3>
        <div className='list-group'>
          <div className='list-group-item d-flex gap-3 py-3' >
              <ul className='list-group list-group-horizontal'>
                <li className='list-group-item border-0'><strong className='fs-5 align-top'>Reflex:</strong></li>
                <li className='list-group-item list-group-item-action border-0'>14<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>total</span></li>
                <li className='list-group-item border-0'>=</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>base</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>level</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>class</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>DEX</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>misc</span></li>
              </ul>
              <p className="mb-0 opacity-75"></p>
          </div>
          <div className='list-group-item d-flex gap-3 py-3' >
              <ul className='list-group list-group-horizontal'>
                <li className='list-group-item border-0'><strong className='fs-5 align-top'>Foritude:</strong></li>
                <li className='list-group-item list-group-item-action border-0'>14<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>total</span></li>
                <li className='list-group-item border-0'>=</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>base</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>level</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>class</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>CON</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>misc</span></li>
              </ul>
              <p className="mb-0 opacity-75"></p>
          </div>
          <div className='list-group-item d-flex gap-3 py-3' >
              <ul className='list-group list-group-horizontal'>
                <li className='list-group-item border-0'><strong className='fs-5 align-top'>Will:</strong></li>
                <li className='list-group-item list-group-item-action border-0'>14<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>total</span></li>
                <li className='list-group-item border-0'>=</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>base</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>level</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>class</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>WIS</span></li>
                <li className='list-group-item border-0'>+</li>
                <li className='list-group-item list-group-item-action border-0'>10<span className='badge bg-secondary position-absolute top-100 start-50 translate-middle rounded-pill opacity-50'>misc</span></li>
              </ul>
              <p className="mb-0 opacity-75"></p>
          </div>
        </div>
      </>
    );
  }
}

export default Defenses;