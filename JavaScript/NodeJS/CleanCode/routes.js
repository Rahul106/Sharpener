const fs = require('fs');
const querystring = require('querystring');
const filePath = 'D:/Project_Workspace/CodeRoot/Sharpener/JavaScript/NodeJS/chatmsg.txt'; // Replace with actual absolute path


// Function to read messages from the file
const readMessagesFromFile = (callback) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return callback(err);
        }
        // Split the data into individual messages
        const messages = data.trim().split('\n').filter(Boolean); // Filter out empty lines
        callback(null, messages);
    });
};


// Function to write a new message to the file
const writeMessageToFile = (message, callback) => {
    // Append the new message to the file with a newline character
    fs.appendFile(filePath, message + '\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return callback(err);
        }
        callback(null);
    });
};


// Check if the file exists and create it if it doesn't
// fs.access(filePath, fs.constants.F_OK, (err) => {
//   if (err) {
//     // File does not exist, create it
//     fs.writeFile(filePath, '', (err) => {
//       if (err) {
//         console.error('Error creating file:', err);
//       }
//     });
//   }
// });


// Server code remains unchanged
// Check if the file exists and create it if it doesn't
fs.access('chatmsg.txt', fs.constants.F_OK, (err) => {
    if (err) {
        // File does not exist, create it
        fs.writeFile('chatmsg.txt', '', (err) => {
            if (err) {
                console.error('Error creating file:', err);
            }
        });
    }
});


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        // Read messages from the file
        readMessagesFromFile((err, messages) => {
            if (err) {
                res.statusCode = 500;
                return res.end('Internal Server Error');
            }
            // Get the last message
            const lastMessage = messages.length > 0 ? messages[messages.length - 1] : '';

            // Render the form with existing messages
            res.write('<html>');
            res.write('<head><title>Chat Application</title></head>');
            res.write('<body>');
            if (lastMessage) {
                res.write(`<h2>Last Message: ${lastMessage}</h2>`);
            }

            res.write('<h2>Enter Message</h2>');
            res.write('<form action="/messageInfo" method="POST">');
            res.write('<input type="text" name="message">');
            res.write('<button type="submit">Send</button>');
            res.write('</form>');
            res.write('</body>');
            res.write('</html>');
            res.end();
        });
    }

    if (url === '/messageInfo' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = querystring.parse(Buffer.concat(body).toString());
            const message = parsedBody.message;

            // Write the new message to the file
            writeMessageToFile(message, (err) => {
                if (err) {
                    res.statusCode = 500;
                    return res.end('Internal Server Error');
                }
                // Redirect to the homepage
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
}


//module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     someText : 'Hardcoded'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Hardcoded';

exports.handler = requestHandler;
exports.someText = 'Hardcoded';





