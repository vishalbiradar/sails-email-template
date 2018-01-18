var Mailer = {
  sendWelcomeMail: function sendWelcomeMail(obj, cb) {
    sails.hooks.email.send(
      "forgotPassword",
      {
        Name: obj.name,
        Password: obj.password,
      },
      {
        to: obj.email,
        subject: "Geocloud | Password Recovery Mail"
      },
      function(err, res) {
        if (err) {
          return cb(err, undefined);
        } else {
          return cb(undefined, res);
        }
      }
    )
  }
};


module.exports = Mailer;
