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
          console.log(err);
        }
        else {
          console.log("Mail Sent to ", obj.email);
        }
      }
    )
  }
};


module.exports = Mailer;
