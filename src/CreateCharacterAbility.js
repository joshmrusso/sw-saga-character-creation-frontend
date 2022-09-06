import React from 'react';

class CreateCharacterAbility extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let modName = "mod" + this.props.inputId;
    return(
      <>
        <label htmlFor={this.props.inputId} className='col-sm-2 col-form-label col-form-label-lg'>{this.props.inputName}</label>
        <div className='col-sm-8'>
          <input type="range" className='form-range form-control-lg' min={"0"} max="20" id={this.props.inputId} name={this.props.inputId} value={this.props.inputValue} onChange={this.props.handleChange} />
        </div>
        <div className='col-sm-1'>
          <input type="text" className='form-control form-control-lg text-center' min={"0"} max="20" name={this.props.inputId} value={this.props.inputValue} onChange={this.props.handleInputChange} disabled />
        </div>
        <div className='col-sm-1'>
          <input type="text" className='form-control form-control-lg text-center' min={"0"} max="20" name={modName} value={this.props.inputMod} onChange={this.handleInputChange} disabled />
        </div>
      </>
    );
  }
}

export default CreateCharacterAbility;