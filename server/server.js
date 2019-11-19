const transporter = require("./contactMail.js");
const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;
const path = require("path");
const queryString = require("querystring");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/contactus") {
    console.log("hello");
    let thisCanBeChanged = "";
    req.on("data", chunk => {
      thisCanBeChanged += chunk;
    });
    // req.on("end", () => {
    //   let data = JSON.parse(thisCanBeChanged);

    //   var mailOptions = {
    //     from: "test",
    //     to: "english4usireen@gmail.com",
    //     subject: "Contact need to be called " + `${data.name}`,
    //     text:
    //       "Hello i am " +
    //       `${data.name}` +
    //       " can i have some information " +
    //       `${data.msg}` +
    //       " My phone # " +
    //       `${data.phone}`
    //   };
    //   transporter.sendMail(mailOptions, function(error, info) {
    //     if (error) {
    //       return error;
    //     } else {
    //       console.log("Email sent: " + info.response);

    //       res.writeHead(200, {
    //         "Content-Type": "text/html"
    //       });
    //     }
    //   });
    // });
  }
  res.end(<h1>alrite</h1>);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
