var Clients = require('../models/client');


exports.createClient = (req, res, next) => {
    const client = new Clients({
        username:req.body.username,
        password:req.body.password,
        name: req.body.name,
        address: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        //userId: req.body.userId
    });
    client.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
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

exports.getOneClient = (req, res, next) => {
    Clients.findOne({
        _id: req.params.id
    }).then(
        (client) => {
            res.status(200).json(client);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

// exports.modifyClient = (req, res, next) => {
//     const Client = new Clientss({
//         _id: req.params.id,   
//         name: req.body.name,
//         address: req.body.name,
//         email: req.body.email,
//         phoneNo: req.body.phoneNo,
//         // userId: req.body.userId
//     });
//     Clients.updateOne({
//         _id: req.params.id
//     }, client).then(
//         () => {
//             res.status(201).json({
//                 message: 'Client updated successfully!'
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

exports.deleteOneClient = (req, res, next) => {
    Clients.deleteOne({
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

exports.getAllClient = (req, res, next) => {
    Clients.find().then(
        (clients) => {
            res.status(200).json(clients);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};