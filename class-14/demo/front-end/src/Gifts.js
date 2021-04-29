import React from 'react';
import axios from 'axios';
import UpdateGift from './UpdateGift';

class Gifts extends React.Component {
  constructor(props){
    super(props);
    this.state={
      displayUpdateGift: false,
      giftToUpdate: {},
      index: -1
    }
  }
  deleteGift = async (index) => {
    const newGifts = this.props.gifts.filter((gift, i) => i !== index);

    this.props.removeAGift(newGifts);
    
    await axios.delete(`http://localhost:3001/gift/${index}`, {params: {email: this.props.email}});
  }

  displayUpdateGift = (idx) => {
    const giftToUpdate = this.props.gifts[idx];
    this.setState({ 
      displayUpdateGift: true,
      giftToUpdate,
      index: idx
    });
  }

  updateGifts = (giftsArray) => {
    this.props.updateGifts(giftsArray);
  }

  render() {
    return(
      <>
      <h2>Welcome to the Gift Registry!</h2>
      <p>To find your registry, enter your email below.</p>
      {this.props.gifts.length && this.props.gifts.map((gift, idx) => (
        <div key={idx}>
          <p>name:{gift.name}</p>
          <p>description:{gift.description}</p>
          <button onClick={() => this.deleteGift(idx)}>delete</button>
          <button onClick={() => this.displayUpdateGift(idx)}>update</button>
        </div>
      ))}

      {this.state.displayUpdateGift && 
        <UpdateGift
          gift={this.state.giftToUpdate}
          index={this.state.index}
          email={this.props.email}
          updateGifts={this.updateGifts}
          hideUpdateGift={() => this.setState({displayUpdateGift: false})}
        />
      }
      </>
    )
  }
}

export default Gifts;