var mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  title :{ type: String, required: true },
  description :{ type: String, required: true },
  createDate : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
