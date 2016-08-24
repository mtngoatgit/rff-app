var requiresLogin = require('requiresLogin');

app.get('/user',
  requiresLogin,
  function (req, res) {
    res.render('user', {
      user: req.user
    });
  });
