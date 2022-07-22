const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const route = require("./routes");
var cors = require("cors");
const db = require("./config/db");
require("dotenv").config();

db.connect();
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:false}))
route(app); // route init
 
// const buildDir = path.join(__dirname, '../build');
// console.log('Using files in ' + buildDir);

// const subDir = '/';
// const logRequests = false;

// if (subDir === '/') {
//     console.log('The server config assuming it is serving at the server root. You can control this with the `subDir` variable in index.js.');
// } else {
//     console.log('The server config assuming it is serving at \'' + subDir + '\'.');
// }

// if (logRequests) {
//     console.log('The server will log all incoming request. It\'s not recommended for production use.');
// }

// // Serve the static files from the React app
// app.use(subDir, express.static(buildDir));
// // Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//     if (logRequests) {
//         console.log(req.method + ' ' + req.url);
//     }
//     res.sendFile(path.join(buildDir, 'index.html'));
// });

const PORT = process.env.PORT
app.listen(PORT, function () {
  console.log(
    `LOCALHOST${PORT}`,
  );
});
