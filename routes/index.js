var express = require('express');
var router = express.Router();
var Users = require('../models/users');
var Tasks = require('../models/task');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TODO_APP || DIGITAL' });
  next();
});

router.get('/signup',function(req, res){
  res.render('signup', { title: 'TODO_APP || DIGITAL' });
});

router.get('/login',function(req, res){
  res.render('login', { title: 'TODO_APP || DIGITAL' });
});

router.get('/createTask',function(req, res){
  res.render('createTask', { title: 'TODO_APP || DIGITAL' });
});
router.post('/signup', (req, res) => {
const user = new Users({
  username : req.body.username,
  password : req.body.password
});

console.log(req.body);
if(req.body.username != '' && req.body.password != '' && req.body.repassword != '') {
  if(req.body.password == req.body.repassword){    
    user.save().then((user) => {
      console.log('user signed with values', user);
      res.redirect('/createTask');
    }).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
  else{
  console.log("passwords donot match");
  }
}else{
console.log("Please fill all the fields");
}
});


router.post('/login',function(req,res){
  console.log(req.body);
  if(req.body.username && req.body.password){
    Users.findOne({username : req.body.username, password : req.body.password}, function(err, user){
      if(user != null){
        console.log('Logged in with ', user);
        res.redirect('/createTask');
      }else{
        console.log('User not valid');
      }
    });
  }else{
    console.log("Please enter username and password");
  }

});


router.post('/saveTask', (req, res, next) => {
  const task = new Tasks({
    title: req.body.title,
    description: req.body.description
  });
  task.save().then(
    () => {
      Tasks.find().then(
      (tasks) => {
        res.render('listTask',{
        tasks:tasks,title: 'TODO_APP || DIGITAL' 
        });
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.get('/listTask',function(req, res){
  Tasks.find().then(
    (tasks) => {
      res.render('listTask',{tasks});
    }).catch(
(error) => {
  res.status(400).json({
    error: error
  });
});
});


router.get('/deleteTask/:id', function(req, res){
  console.log(req.params.id);
  Tasks.remove({ _id : req.params.id }).then(
    Tasks.find().then(
      (tasks) => {
        res.render('listTask',{tasks});
      })).catch(
  (error) => {
    res.status(400).json({
      error: error
    });
  }
);
});

router.get('/editTask/:id', function(req, res) {
  var taskId = req.params.id;
  Tasks.findOne({ _id : taskId}).exec(function(err, task){
    res.render('editTask',{task});
  });
});

router.post('/saveEditedTask', function(req, res){
  //res.send(req.body);
  Tasks.findOneAndUpdate({ _id : req.body._id }, { $set : req.body }, (err, note) => {
    if(!err){Tasks.find().then(
      (tasks) => {
        res.render('listTask',{
        tasks:tasks,title: 'TODO_APP || DIGITAL' 
        });
      });
    }else{
      console.log("Error!!");
    }
  })

});

module.exports = router;
