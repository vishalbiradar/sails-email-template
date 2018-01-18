var Mailer = {
  sendWelcomeMail: function sendWelcomeMail(obj) {
    sails.hooks.email.send(
      "forgotPassword",
      {
        Name: obj.name,
        Password: obj.password,
      },
      {
        to: obj.email,
        subject: "Recovery Password"
      },
      function(err) {
        if(err) {
          return 400;
        }
        else {
          return 200;
        }
      }
    )
  }
};


module.exports = Mailer;
