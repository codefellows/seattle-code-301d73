import React from 'react';
import Parent from './parent.js';
import Header from './header';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render(){
    return (
      <Container>

      <div className="App">
        <Header title={'Billy is a teenager'} />
        <Parent />
      </div>
      </Container>
    );
  }
}

export default App;
