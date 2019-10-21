const { transporter, mailOptions } = require("./contactMail.js");
const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url, "reqeeeeeee");
  if (req.method === "POST" && req.url === "/contactus") {
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
