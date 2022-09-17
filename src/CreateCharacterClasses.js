import React from 'react';
import CreateCharacterClass from './CreateCharacterClass';

class CreateCharacterClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      dataIsLoaded: false
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/classes")
      .then((res) => res.ok ? res.json(): Promise.reject())
      .then((json) => {
        this.setState({
          classes: json,
          dataIsLoaded: true
        });
      });
  }

  render() {
    return(
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {this.state.classes.map( (clas) => <CreateCharacterClass key={clas._id} clas={clas} />)}
      </div>
    );
  }
}

export default CreateCharacterClasses;