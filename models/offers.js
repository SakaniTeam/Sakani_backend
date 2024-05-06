const mongoose = require('../database/db');

const offerSchema = new mongoose.Schema({

  // percentage: {
  //   type: "Number",
  //   required: true
  // },
  property_name: {
    type: String ,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },


});


module.exports = mongoose.model("offer", offerSchema);