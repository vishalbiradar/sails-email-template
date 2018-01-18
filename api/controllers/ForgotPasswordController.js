/*
* ForgotPasswordController.js
*
* It will accepts the email as request body and then it will send the mail to
* the email send from the url request.
* */

module.exports = {
  forgotPassword: function (req, res) {
        var user = {"name" : "Vishal Biradar", "email" : req.body.email, "password" : "xyzabcd@1234"};
        Mailer.sendWelcomeMail(user);  // <= Here we using
        res.json(200, {success: "Email sent successfully to " + user.email});
  }
};
