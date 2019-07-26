const express = require('express');
const router = express.Router();

const clientCtrl=require('../controllers/client');

router.get('/', function(req, res) {
    res.render('clientSignup');
  });
router.get('/all', clientCtrl.getAllClient);
router.post('/',clientCtrl.createClient);
// router.get('/:id',clientCtrl.getOneClient);
// router.put('/:id', clientCtrl.modifyClient);
// router.delete('/:id',clientCtrl.deleteOneClient);

module.exports = router;