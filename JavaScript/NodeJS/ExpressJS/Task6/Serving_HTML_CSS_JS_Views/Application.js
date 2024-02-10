const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const rootDir = require('./util/path');
const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const conController = require('./controllers/contactus');
const sucController = require('./controllers/success');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/contactus', conController.getContact);
app.get('/success', sucController.getSuccessPage);

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'));
});


app.listen(3000);