const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

const formHTML = '<form action="/product" method="POST">' +
'<label for="pName">Product Name : </label><br>'+
'<input type="text" name="productName" id="pName"><br>'+
'<label for="pCount">Product Size : </label><br>'+
'<input type="text" name="productCount" id="pCount"><br>'+
'<button type="submit">Add Product</button>'+
'</form>';

app.use('/add-product', (req, res, next) => {
    res.send(formHTML);
});

app.use('/product', (req, res, next) => {
    console.log('Product Title : ' +req.body.productName);
    console.log('Product Size : ' +req.body.productCount);
    console.log('ProductObject: ' +JSON.stringify(req.body));
    res.send('<h1>Product Saved Succesfull!!Thanks</h1>');
    //res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Website not find Use Correct Link</h1>');
});



//const server = http.createServer(app);
// server.listen(3000, () => {
//     console.log('App Running on port Number : 3000');
// });

//Below code is equal to line number20 to line number23
app.listen(3000);