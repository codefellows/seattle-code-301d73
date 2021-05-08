import React from 'react';

class UpdateSnack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      _id: this.props.snack._id
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.onUpdate(this.state);
  }

  handleNameChange = (e) => this.setState({ name: e.target.value });
  handleDescriptionChange = (e) => this.setState({ description: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name of Snack</label>
        <input onChange={this.handleNameChange} placeholder={this.props.snack.name}></input>
        <label>Description of Snack</label>
        <input onChange={this.handleDescriptionChange} placeholder={this.props.snack.description}></input>
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default UpdateSnack;
