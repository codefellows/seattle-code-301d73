const Gift = {};

const User = require('../models/Users');


Gift.getAllGifts = async (request, response) => {
  // response.send('request and response for 500 dollars');
  const email = request.query.email;

  await User.find({ email }, (err, users) => {
    if (err) console.error(err);
    if (!users.length) {
      response.send('user not found');
    } else {
      const user = users[0];
      response.send(user.gifts);
    }
  });
}

Gift.createGift = async (request, response) => {
  const { newGift, email } = request.body;
  await User.find({ email }, (err, users) => {
    if (err) console.error(err);
    if (!users.length) {
      response.send('no user found');
      return;
    }
    const user = users[0];
    user.gifts.push(newGift);
    user.save();
    response.send(user.gifts);
  })
}

Gift.deleteGift = async (request, response) => {
  const index = Number(request.params.index);
  const email = request.query.email;

  await User.find({ email }, (err, users) => {
    if (err) console.error(err);
    const user = users[0];
    const newGiftArray = user.gifts.filter((_, i) => i !== index);
    user.gifts = newGiftArray;
    user.save();
    response.send('success!');
  })
}

Gift.updateGift = async (request, response) => {
  const index = Number(request.params.index);
  const newGift = request.body.newGift;
  const email = request.body.email;

  await User.find({ email }, (err, users) => {

    if (err) console.error(err);

    const user = users[0];
    user.gifts.splice(index, 1, newGift);
    user.save();
    response.send(user.gifts);

  });
}
module.exports = Gift;