var Products = require('../models/products');


exports.createProduct = (req, res, next) => {
    const product = new Products({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        //userId: req.body.userId
    });
    product.save().then(
        () => {
            // res.status(201).json({
            //     message: 'A new product saved successfully!'
            // });
            Products.find().then(
                (products) => {
                  res.render('listProduct',{products});
                });
        }).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneProduct = (req, res, next) => {
    Products.findOne({
        _id: req.params.id
    }).then(
        (product) => {
            res.render('viewSingleProduct',{product});
          }
        // (product) => {
        //     res.status(200).json(product);
        // }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyProduct = (req, res, next) => {
    const Product = new Products({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        // userId: req.body.userId
    });
    Products.updateOne({
        _id: req.params.id
    }, Product).then(
        (products) => {
            res.render('listProduct',{products});
          }
        // () => {
        //     res.status(201).json({
        //         message: 'Product updated successfully!'
        //     });
        // }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteOneProduct = (req, res, next) => {
    Products.deleteOne({
        _id: req.params.id
    }).then(
        (products) => {
            res.render('listProduct',{products});
          }
        // () => {
        //     res.status(200).json({
        //         message: 'Product Deleted!'
        //     });
        // }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllProduct = (req, res, next) => {
    Products.find().then(
        (products) => {
            res.render('listProduct',{products});
          }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};