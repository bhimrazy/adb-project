var Users = require('../models/users');


exports.signupUser = (req, res, next) => {
    const user = new Users({
        name: req.body.name,
        username:req.body.username,        
        password:req.body.password,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        //userId: req.body.userId
    });
    
    console.log(req.body);
    if(req.body.username != '' && req.body.password != '' && req.body.repassword != '') {
      if(req.body.password == req.body.repassword){    
        user.save().then((user) => {
          console.log('user signed with values', user);
          res.render('userLogin');
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
};

exports.loginUser=(req,res)=> {
    console.log(req.body);
    if(req.body.username && req.body.password){
      Users.findOne({username : req.body.username, password : req.body.password}, function(err, user){
        if(user != null){
          console.log('Logged in with ', user);
          res.render('user-Dashboard');
        }else{
          console.log('User not valid');
        }
      });
    }else{
      console.log("Please enter username and password");
    }
  
};



exports.getOneUser = (req, res, next) => {
    Users.findOne({
        _id: req.params.id
    }).then(
        (user) => {
            res.status(200).json(user);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

// exports.modifyUser = (req, res, next) => {
//     const Client = new Clientss({
//         _id: req.params.id,
//         name: req.body.name,
//         address: req.body.name,
//         email: req.body.email,
//         phoneNo: req.body.phoneNo,
//         // userId: req.body.userId
//     });
//     Users.updateOne({
//         _id: req.params.id
//     }, user).then(
//         () => {
//             res.status(201).json({
//                 message: 'User updated successfully!'
//             });
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
//         }
//     );
// };

exports.deleteOneUser = (req, res, next) => {
    Users.deleteOne({
        _id: req.params.id
    }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllUser= (req, res, next) => {
    Users.find().then(
        (users) => {
            res.status(200).json(users);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};