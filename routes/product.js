const express = require('express');
const router = express.Router();

const productCtrl=require('../controllers/product');

router.get('/', productCtrl.getAllProduct);
router.get('/add', function(req, res) {
    res.render('addProduct');
  });
router.get('/list', productCtrl.getAllProduct);
router.post('/saveNewProduct',productCtrl.createProduct);
router.get('/:id',productCtrl.getOneProduct);
router.put('/modifyProduct/:id', productCtrl.modifyProduct);
router.delete('/deleteProduct/:id',productCtrl.deleteOneProduct);

module.exports = router;