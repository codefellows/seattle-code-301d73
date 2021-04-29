import React from 'react';
import axios from 'axios';

class UpdateGift extends React.Component {
  constructor(props){
    super(props);
    this.state={
      giftName: '',
      giftDescription: ''
    }
  }

  updateGift = async (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    try {
      const updatedGiftAxiosArray = await axios.put(`${SERVER}/gift/${this.props.index}`, { newGift: {name: this.state.giftName, description: this.state.giftDescription}, email: this.props.email});

      const updatedGiftArray = updatedGiftAxiosArray.data;
      this.props.updateGifts(updatedGiftArray);
      this.props.hideUpdateGift()
    } catch(err){
      console.error(err);
    }
  }

  render() {
    console.log('update gifts', this.props)
    return(
      <form onSubmit={this.updateGift}>
        <label>Name of Gift</label>
        <input onChange={(e) => this.setState({giftName:e.target.value})} placeholder={this.props.gift.name}></input>
        <label>Description of Gift</label>
        <input onChange={(e) => this.setState({giftDescription:e.target.value})}placeholder={this.props.gift.description}></input>
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default UpdateGift;
