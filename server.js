const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello World</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
          text-align: center;
          background: white;
          padding: 50px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        h1 {
          color: #667eea;
          font-size: 48px;
          margin: 0;
        }
        p {
          color: #666;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello World!</h1>
        <p>Your web server is running successfully 🎉</p>
        <p><small>Powered by Node.js</small></p>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Press Ctrl+C to stop the server');
});
