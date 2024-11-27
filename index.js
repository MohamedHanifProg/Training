const http = require("http"); // we bring module that called http and saved it in variable
const port = 8080; // i want to run on port 8080

// request and response 
// here we are filling our response 
http.createServer((req, res) => {
    res.writeHead(200);
    res.write("hi");
    res.end();
}).listen(port);
console.log(`Listening on port ${port}`);