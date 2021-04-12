import React from 'react';
import axios from 'axios';

class Cats extends React.Component {
  deleteCat = async (index) => {
    const newCats = this.props.cats.filter((cat, i) => i !== index);

    this.props.updateCats(newCats);
    
    await axios.delete(`http://localhost:3001/cats/${index}`, {params: {name: this.props.name}});
  }

  render() {
    return(
      <>
      <h2>My Cats</h2>
      {this.props.cats.length && this.props.cats.map((cat, idx) => (
        <div key={idx}>
          {cat.name}
          <button onClick={() => this.deleteCat(idx)}>delete</button>
        </div>
      ))}
      </>
    )
  }
}

export default Cats;