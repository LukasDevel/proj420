
var express = require('express');
var router = express.Router();
const conn = require('./dbconn');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/', (req, res, next) => {
  res.header('Access-Control-Allow-Content-Type','application/json');
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
});

router.post('/db', (req, res)=>{
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

  conn.query(sql,[username, email, password], (err , res, fields) => {
    if (err) throw err;
    console.log(res); 
  });
  
  res.send(req.body);
  

});

module.exports = router;
