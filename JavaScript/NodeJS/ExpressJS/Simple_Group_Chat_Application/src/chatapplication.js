const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

// Serve static files from the views directory
app.use(express.static(path.join(__dirname, 'views')));

// Serve HTML file for the "/login" route
app.get('/login', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '/views/login.html'));
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Serve the chatdashboard.html file for the "/dashboard" route
app.get('/dashboard', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/chatdashboard.html'));
});

// Handle form submission from chat dashboard
app.post('/submitMessage', express.json(), (req, res) => {
    const { message, username } = req.body;

    // Write username and message to message.txt file
    const chatInfoDir = path.join(__dirname, 'chatinformation');
    if (!fs.existsSync(chatInfoDir)) {
        fs.mkdirSync(chatInfoDir);
    }

    const messageFilePath = path.join(chatInfoDir, 'message.txt');
    const data = `${username}: ${message}\n`;

    fs.appendFile(messageFilePath, data, (err) => {
        if (err) {
            console.error('Error writing message to file:', err);
            res.status(500).send('Error saving message');
        } else {
            console.log('Message saved to file');
            res.status(200).send('Message saved successfully');
        }
    });
});

// Serve messages from message.txt file
app.get('/messages', (req, res) => {
    const messageFilePath = path.join(__dirname, 'ChatInformation', 'message.txt');
    
    // Read messages from message.txt file
    fs.readFile(messageFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading message file:', err);
            res.status(500).send('Error reading messages');
        } else {
            // Split the data by newline to get each message
            const messages = data.split('\n');

            // Send the messages array to the client
            res.json(messages);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
