const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['inPerson', 'virtual'] 
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, 
    required: true
  },
});


module.exports = mongoose.model('tours', tourSchema);