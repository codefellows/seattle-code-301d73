import React from 'react';

class AddASnack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
  }

  handleNameChange = (e) => this.setState({ name: e.target.value });
  handleDescriptionChange = (e) => this.setState({ description: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>name of snack</label>
        <input onChange={this.handleNameChange} />
        <label>describe snack</label>
        <input onChange={this.handleDescriptionChange} />
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default AddASnack;
