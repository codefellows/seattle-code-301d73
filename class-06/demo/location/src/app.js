import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }

  getLocation = async () => {

    const apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

    const response = await axios.get(apiUrl);

    const location = response.data[0];

    this.setState({
      location,
      // same as location:location
    });





  }

  render() {

    const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;

    console.log(img_url);

    return (
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
        <button onClick={this.getLocation}>Explore!</button>
        {this.state.location.place_id &&
          <>
            <h2>The city is: {this.state.location.display_name}</h2>
            <img src={img_url} alt="location" />
          </>
        }
      </>
    )
  }
}

export default App;
