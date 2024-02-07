//const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In The Middleware-1');
    next(); //Allows the request to continue to the next middleware in line.
});

app.use((req, res, next) => {
    console.log('In The Middleware-2');

    //contentype=application/html
    res.send('<h1>Hey Node Rahule Here ...</h1>');
    
    //contentype=application/json
    //res.send({num1 : 'Rahul'});
});

//const server = http.createServer(app);
// server.listen(3000, () => {
//     console.log('App Running on port Number : 3000');
// });

//Below code is equal to line number20 to line number23
app.listen(3000);