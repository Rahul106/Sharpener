const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views', app);

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageController = require('./controllers/notfound');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(pageController.getPage);

app.listen(3000);
