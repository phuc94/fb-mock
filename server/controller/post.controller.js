const Product = require('../models/blog.model');

module.exports.index = function (req,res) {
    Product.find().then(function(products){
        res.send('request received')
    });
}