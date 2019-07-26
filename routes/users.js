const express = require('express');
const router = express.Router();
const userCtrl=require('../controllers/users');

router.get('/', function(req, res) {
    res.render('userSignup');
  });
  router.get('/signup', function(req, res) {
    res.render('userSignup');
  });
  router.get('/login', function(req, res) {
    res.render('userLogin');
  });
router.get('/all',userCtrl.getAllUser);

router.post('/userSignup',userCtrl.signupUser);
router.post('/loginUser',userCtrl.loginUser);
// router.get('/:id',userCtrl.getOneUser);
// router.put('/:id', userCtrl.modifyUser);
// router.delete('/:id',userCtrl.deleteOneUser);

module.exports = router;