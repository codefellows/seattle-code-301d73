import './App.css';

function App() {
  return (
    <div className="App">

      <h1>Tic Tac React</h1>

      <Board />

    </div>
  );
}

function Board() {
  return (
    <div>
      <div className="row">
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="row">
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className="row">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </div>
  );
}

function Square(props) {
  return <p className="square">{props.value}</p>;
}

export default App;
