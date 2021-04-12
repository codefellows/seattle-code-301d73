import React from 'react';
import Parent from './parent.js';
import Header from './header';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header title={'Billy is a teenager'} />
        <Parent />
      </div>
    );
  }
}

export default App;