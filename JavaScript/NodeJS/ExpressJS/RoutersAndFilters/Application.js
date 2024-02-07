const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});


// const server = http.createServer(app);
// server.listen(3000, () => {
//     console.log('App Running on port Number : 3000');
// });

//Below code is equal to line number 14 to line number 17
app.listen(3000);