import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default class Example extends Component {

  render() {
    return (

        <Modal show={this.props.show} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.onClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
  )};
}

