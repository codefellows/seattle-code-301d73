import React from 'react';

class AddACat extends React.Component {
  render() {
    return(
      <form onSubmit={(e) => this.props.createCat(e)}>
        <label>name of cat to add</label>
        <input onChange={(e) => this.props.updateCatName(e.target.value)}></input>
      </form>
    )
  }
}

export default AddACat;
