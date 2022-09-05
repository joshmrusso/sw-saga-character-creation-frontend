import React from 'react';

class SecondWind extends React.Component {
  render () {
    const reflexMath = "14 { 10"

    return(
      <>
        <h3 className='text-center border-bottom'>Second Wind</h3>
        <div className='card text-center'>
          <div className='card-body'>
        <h5 className='card-title'>Uses per day: <span className='badge bg-secondary btn btn-light'>2</span></h5>
        <h6>Bonus HP = <span className='badge bg-secondary'>10</span> [ 1/4 total HP or CON ]</h6>
        </div>
        </div>
      </>
    );
  }
}

export default SecondWind;