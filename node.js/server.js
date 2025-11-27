// Load the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello.\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Node.js web server at port ${port} is running..`);
});
