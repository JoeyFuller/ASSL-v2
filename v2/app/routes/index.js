var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fuller Hosting' });
});

/* GET Products page. */
router.get('/products', function(req, res) {
    res.render('products', { title: 'Products' });
});

/* GET About page. */
router.get('/about', function(req, res) {
    res.render('about', { title: 'About Us' });
});

/* GET Contact page. */
router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Contact Us' });
});

/* GET control page. */
router.get('/control', function(req, res) {
    res.render('control', { title: 'Control Panel' });
});

/* GET login page. */
router.get('/login', function(req, res) {
    res.render('login', { title: 'Login' });
});

/* GET register page. */
router.get('/register', function(req, res) {
    res.render('register', { title: 'Register' });
});



module.exports = router;
