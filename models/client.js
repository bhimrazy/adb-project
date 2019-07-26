var mongoose = require('mongoose');

const clientSchema = mongoose.Schema({  
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },  
  zip: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNo: {
    type: Number,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Clients', clientSchema);
