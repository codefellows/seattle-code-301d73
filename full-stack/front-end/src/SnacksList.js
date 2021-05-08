import React from 'react';
import UpdateSnack from './UpdateSnack';
import ListGroup from 'react-bootstrap/ListGroup';

class SnackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayUpdateSnack: false,
      snackToUpdate: null,
    }
  }

  handleDisplayUpdateSnack = (snack) => {
    this.setState({
      displayUpdateSnack: true,
      snackToUpdate: snack,
    });
  }

  handleUpdate = (snack) => {
    this.setState({ displayUpdateSnack: false });
    this.props.onUpdate(snack);
  }

  render() {
    return (
      <>
        <h2>Welcome to the Land of Snacks</h2>

        <ListGroup>
          {this.props.snacks.length && this.props.snacks.map(snack => (
            <ListGroup.Item key={snack._id}>
              <p>name:{snack.name}</p>
              <p>description:{snack.description}</p>
              <button onClick={() => this.props.onDelete(snack._id)}>delete</button>
              <button onClick={() => this.handleDisplayUpdateSnack(snack)}>update</button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {this.state.displayUpdateSnack &&
          <UpdateSnack
            snack={this.state.snackToUpdate}
            onUpdate={this.handleUpdate}
          />
        }
      </>
    )
  }
}

export default SnackList;