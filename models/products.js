var mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title :{ type: String, required:false },  
  description :{ type: String, required:false },
  imageUrl: { type: String, required:false },
  price :{ type: Number, required:false },
  quantity :{ type: String},
  createDate : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Products', productSchema);
