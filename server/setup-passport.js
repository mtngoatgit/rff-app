var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'buzzard.auth0.com',
    clientID:     'lbQWuzyjwASNOK8l47WoN49Ds2wRye9X',
    clientSecret: 'qTYOBPb1VK8tmDswcbUOp2H4CkTHm84pm1VGRGuMlrbOFVEL43i1EoNFSOuZecBq',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  });

passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;
