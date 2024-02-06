const http = require('http');
const fs = require('fs');
const querystring = require('querystring'); // Import querystring module

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    res.write('<form action="/messageInfo" method="POST">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Send</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/messageInfo' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const decodedMessage = querystring.parse(parsedBody).message; // Decode the message
      fs.writeFile('chatmsg.txt', decodedMessage, err => {
        if (err) {
          console.error('Error writing to file:', err);
          res.statusCode = 500; // Internal Server Error
          return res.end();
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
