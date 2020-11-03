var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

// get config vars
dotenv.config();
// username is in the form { username: "my cool username" }
// ^^the above object structure is completely arbitrary
function generateAccessToken(username) {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) // if there isn't any token

  // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: any) => {
  //   console.log(err)
  //   if (err) return res.sendStatus(403)
  //   req.user = user
  //   next() // pass the execution off to whatever request the client intended
  // })
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("hello");
  res.send('Hello fire world');
});

module.exports = router;
