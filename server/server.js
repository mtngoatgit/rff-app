var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var strategy = require('./setup-passport');
var cookieParser = require('cookie-parser');
var jwt = require('express-jwt');

var session = require('express-session');
var massive = require('massive');
var connectionString = "postgres://postgres@localhost/farmbase";

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));
app.use(cookieParser());
app.use(session({ secret: 'qTYOBPb1VK8tmDswcbUOp2H4CkTHm84pm1VGRGuMlrbOFVEL43i1EoNFSOuZecBq', resave: false,  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


var massiveInstance = massive.connectSync({
  connectionString : connectionString,
  scripts: '/Users/aMoveableFeast/devProjects/rileysFarmFresh/rff-app/server/db'});
app.set('db', massiveInstance);
var db = app.get('db');

app.get('/callback',
  //  FINISH CODING THIS LINE DIRECTLY BELOW
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/user");
  });
app.get('/user', function (req, res) {
  res.render('user', {
    user: req.user
  });
});

var jwtCheck = jwt({
  secret: new Buffer('DuWaKZjHpPPnh9qPWUKMPq0LYujFTGDLqLSNAmtOkozI7rxBC3ytf-FUPxPwc420', 'base64'),
  audience: '1BKYMF7l1E4h36AC6vcd4HHTlAEzZbOV'
});
//  FINISH CODING THIS BELOW
app.use('/wholesale', jwtCheck);
app.use('/admin', jwtCheck);
var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:3000/#/admin',
  headers: { authorization: 'Bearer lbQWuzyjwASNOK8l47WoN49Ds2wRye9X' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});





var controller = require('./productCtrl.js');

app.get('/markets', controller.getMarkets);
app.post('/markets', controller.addMarket);
app.delete('/markets/:id', controller.deleteMarket);

app.get('/products', controller.getProducts);
app.post('/products', controller.addProduct);
app.delete('/products/:id', controller.deleteProduct);

// app.get('/users', controller.getUser);
// app.post('/users', controller.addUser);
app.get('/invoices', controller.getInvoices);
app.post('/orders', controller.addOrder);
app.delete('/invoices/:id', controller.deleteInvoice);

app.get('/notes', controller.getNotes);
app.post('/notes', controller.addNote);
app.delete('/notes/:id', controller.deleteNote);


app.listen(3000, function(){
  console.log('listening on port 3000')
})
