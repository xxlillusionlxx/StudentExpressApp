var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Student Express' });
});

router.get('/loan_info', function(req, res) {
	res.render('loan_info', { title: 'Student Express - Loan Info'});
});

router.get('/login', function(req, res) {
	res.render('login', { title: 'Student Express - Login'});
});

module.exports = router; 
