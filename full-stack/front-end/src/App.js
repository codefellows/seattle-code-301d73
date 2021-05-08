import React from 'react';
import axios from 'axios';
import SnacksList from './SnacksList';
import AddASnack from './AddASnack';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = 'http://localhost:3001';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAddASnack: false,
      snacks: [],
    }
  }

  componentDidMount() {
    this.getSnacks();
  }

  handleCreateSnack = async (snack) => {
    await axios.post(`${API}/snacks`, snack);
    this.setState({ displayAddASnack: false });
    this.getSnacks();

  }

  getSnacks = async () => {
    try {
      const response = await axios.get(`${API}/snacks`);
      this.setState({ snacks: response.data });

    } catch (error) {
      console.log(error);
    }
  }

  handleUpdateSnack = async snack => {
    await axios.put(`${API}/snacks/${snack._id}`, snack);
    this.getSnacks();
  }

  handleDeleteSnack = async id => {
    await axios.delete(`${API}/snacks/${id}`);
    this.getSnacks();
  }

  handleDisplayAddASnack = () => {
    this.setState({ displayAddASnack: true });
  }

  render() {
    return (
      <>
        <SnacksList
          snacks={this.state.snacks}
          onDelete={this.handleDeleteSnack}
          onUpdate={this.handleUpdateSnack}
        />

        <button onClick={this.handleDisplayAddASnack}>
          Add a Snack
        </button>

        {this.state.displayAddASnack &&
          <AddASnack onCreate={this.handleCreateSnack} />
        }
      </>
    )
  }
}

export default App;
