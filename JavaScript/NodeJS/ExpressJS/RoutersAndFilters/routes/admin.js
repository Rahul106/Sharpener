const express = require('express');
const router = express.Router();

const formHTML = '<form action="/admin/add-product" method="POST">' +
'<label for="pName">Product Name : </label><br>'+
'<input type="text" name="productName" id="pName"><br>'+
'<label for="pCount">Product Size : </label><br>'+
'<input type="text" name="productCount" id="pCount"><br>'+
'<button type="submit">Add Product</button>'+
'</form>';

router.get('/add-product', (req, res, next) => {
    res.send(formHTML);
});

router.post('/add-product', (req, res, next) => {

    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        // Redirect to '/'
        return res.redirect('/');
    }

    console.log('Product Title : ' +req.body.productName);
    console.log('Product Size : ' +req.body.productCount);
    console.log('ProductObject: ' +JSON.stringify(req.body));
    res.send('<h1>Product Saved Succesfull!!Thanks</h1>');
});

module.exports = router;