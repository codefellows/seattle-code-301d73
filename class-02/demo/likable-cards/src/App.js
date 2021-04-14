import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import components from bootstrap
import { Container, CardColumns, Card, Navbar } from 'react-bootstrap'
import { Component } from 'react'
//import items from a json file
import items from './data.json'

function App() {

  return (
    <Container fluid>

    //component from bootstrap
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Horned beasts
      </Navbar.Brand>
    </Navbar>

      <CardColumns>

        {/*uses the json data to create a Component*/}
        {/*what does map do?*/}
        {items.map(item => (
          <LikeableCard
            title={item.title}
            description={item.description}
            imgUrl={item.image_url}
          />
        ))}

      </CardColumns>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#bio">Softie Ware Inc.</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

class LikeableCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }

  addFavorite = () => {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <Card
        bg="dark"
        text="light"
        onClick={this.addFavorite}
      >
        <Card.Img src={this.props.imgUrl} variant="top" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            😍 = {this.state.likes}

          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default App;
