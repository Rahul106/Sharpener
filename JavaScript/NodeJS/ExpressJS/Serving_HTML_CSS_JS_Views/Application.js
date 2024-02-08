const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const rootDir = require('./util/path');
const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

app.use('/success', (req, res, next) => {
    console.log('----------------------------');
    res.send('<h1>Form successfuly filled</h1>');
});

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'));
});


// const server = http.createServer(app);
// server.listen(3000, () => {
//     console.log('App Running on port Number : 3000');
// });

//Below code is equal to line number 14 to line number 17
app.listen(3000);

