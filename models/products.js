var mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title :{ type: String, required: true },  
  description :{ type: String, required: true },
  imageUrl: { type: String, required: true },
  price :{ type: Number, required: true },
  quantity :{ type: String, required: true },
  createDate : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Products', productSchema);
