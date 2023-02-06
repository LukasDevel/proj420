

var express = require('express');
var router = express.Router();
const conn = require('./dbconn')

router.all('/', (req, res, next) => {
  res.header('Access-Control-Allow-Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
});

class User {
  id;
  username;
  email;
  password;

  constructor(id, username, email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

}
 
/* GET users listing. */
router.get('/users', function (req, res) {
  var s = [];
  let sql = "SELECT * FROM users"
  conn.query(sql, (err, resp) => {
    if (err) throw err;
    for(user of resp) {
      x = new User(user.id, user.username, user.email, user.password);
      s = s.concat(x);
    }
    res.send(s);
  });
});

module.exports = router;
