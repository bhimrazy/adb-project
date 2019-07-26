const express = require('express');
const router = express.Router();

const Products=require('../models/products');

router.get('/', (req, res, next) => {
  Products.find().then(
      (products) => {
          res.render('index',{products});
        }
  ).catch(
      (error) => {
          res.status(400).json({
              error: error
          });
      }
  );
});
module.exports = router;