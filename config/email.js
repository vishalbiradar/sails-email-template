module.exports.email = {
  service: "Gmail",
  secure: false,
  secureConnection: false,
  ignoreTLS: true,
  auth: {
    user: "example@gmail.com",
    pass: "password",
  },
  from: "Your Name",
  templateDir: "views/emailTemplates",
  testMode: false
};

