# Send Email Using Sails App

This project contains the code of sending email using sails-hook-email.
We can customise the email template and we can send the data to the email.

Steps are as beow:

Step 1) Install required dependencies

```sh
npm install sails-hook-email --save

```
You can install nodemon for monitoring the api changes.

```sh
npm install nodemon --save

```

Step 2) Create email.js in config folder

config/email.js
---------

```js

module.exports.email = {
  service: "Gmail",
  secure: false,
  secureConnection: false,
  ignoreTLS: true,
  auth: {
    user: "example@gmail.com", // email through which you want to send mail
    pass: "password", // password of the above email
  },
  from: "from@gmail.com",
  templateDir: "views/emailTemplates", // to send our custom email template
  testMode: false
};

```


Step 3) Create Mailer service class, which will actually send the mail using sails email hook.

```js

var Mailer = {
  sendWelcomeMail: function sendWelcomeMail(obj) {
    sails.hooks.email.send(
      "forgotPassword",
      {
        Name: obj.name,         // to show name in email template
        Password: obj.password, // to show password in email template
                                // like this we can send data to the email
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

```

Step 4) Create your custom email template inside views/emailTemplates/forgotPassword folder.  
Create the above mentioned folders and in that folder create html.ejs file.  
This file contains the email template html code.  

views/emailTemplates/forgotPassword/html.ejs
---------

```html

<p>Dear <%=Name%>,</p>
<p>Your password is: <%=Password%> </p>
<br/><br/>
<p>Best Regards,</P>
<p>Xyz Company</p>

```

Note: file name must be html.ejs only

Step 5) create controller that will call the Mailer service for
appropriate route url

```js

module.exports = {
  forgotPassword: function (req, res) {
        var user = {"name" : "Vishal Biradar", "email" : req.body.email, "password" : "xyzabcd@1234"};
        Mailer.sendWelcomeMail(user);  // <= Here we using
        res.json(200, {success: "Email sent successfully to " + user.email});
  }
};

```
Step 6) Create route in routes.js for above functionality

```js

'POST /forgotPassword': {controller: "ForgotPassword", action: "forgotPassword"}

```
Step 7) Run the sails app

```sh
npm start

```

Step 8) verify the functionality in postman

```js

method type: post
url: http://localhost:1337/forgotPassword
body: { "email":"example@gmail.com"}

```

If it is running successfully, then

Step 9) Check your email inbox, you would have received new email.
