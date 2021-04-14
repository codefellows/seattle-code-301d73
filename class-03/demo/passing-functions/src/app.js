import React from 'react';
import Parent from './parent.js';
import Header from './header';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import ModalExample from './modal-example'
import Button from 'react-bootstrap/Button'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  handleShow = () => {
    this.setState({showModal: true})
  }

  handleClose = () => {
    this.setState({showModal: false});
  }

  render(){
    return (
      <Container>
          <Button variant="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button>

        <ModalExample show={this.state.showModal} onClose={this.handleClose} />
        <Header title={'Billy is a teenager'} />
        <Parent />

      </Container>
    );
  }
}

export default App;
