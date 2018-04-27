const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idvalidator = require ('mongoose-id-validator');

const ReviewS = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: [true]
  },
  description: {
    type: String,
    required: [true, 'field']
  }
});

ReviewS.plugin(idvalidator);

const Review = mongoose.model('review', ReviewS);

module.exports = Review;
