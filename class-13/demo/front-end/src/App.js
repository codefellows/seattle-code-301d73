import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import Form from './Form';
import AddACat from './AddACat';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: [],
      name: '',
      catName: ''
    }
  }

  getMyCats = async (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    try {
      const cats = await axios.get(`${SERVER}/cats`, {params: { name: this.state.name }});
      console.log(cats.data)
      this.setState({ cats: cats.data });

    } catch(error){
      console.log(error);
    }
  }

  updateCatName = (catName) => this.setState({ catName });

  createCat = async (e) => {
    e.preventDefault();
    const API = 'http://localhost:3001';
    console.log('axios', {newCat: this.state.catName, name: this.state.name})
    const cats = await axios.post(`${API}/cats`, {newCat: this.state.catName, name: this.state.name});
    console.log({cats});
    const allCatsArray = cats.data;
    this.setState({ cats: allCatsArray });
  }

  updateName = (name) => this.setState({ name });

  updateCats = (arrayOfCats) => this.setState({ cats: arrayOfCats });

  render() {
    return(
      <>
        <Cats 
        cats={this.state.cats} 
        name={this.state.name}
        updateCats={this.updateCats}
        />
        <Form 
        updateName={this.updateName} 
        getMyCats={this.getMyCats}
        />
        <AddACat
          updateCatName={this.updateCatName}
          createCat={this.createCat}
        />
      </>
    )
  }
}

export default App;
