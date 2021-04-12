import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Photos from './photos';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchQuery:'',
      photos: [],
    }
  }

  updateSearchQuery = (e) => this.setState({ searchQuery: e.target.value });

  getPhotos = async (e) => {
    e.preventDefault();
    console.log(this.state.address)

    try {
      const API = 'http://localhost:3001';
      const photos = await axios.get(`${API}/photo`, { params: {searchQuery: this.state.searchQuery }});
      console.log(photos.data)
      this.setState({ photos: photos.data });
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    return(
      <>
      <Form onSubmit={this.getPhotos}>
        <Form.Group controlId="searchQuery">
          <Form.Label>Find Photos About...</Form.Label>
          <Form.Control onChange={this.updateSearchQuery} type="text" placeholder="Enter a search term" />
        </Form.Group>
      </Form>

      {this.state.photos.length && 
        <Photos
          photos={this.state.photos}
          searchQuery={this.state.searchQuery}
        />
      }
      </>
    )
  }
}

export default App;
