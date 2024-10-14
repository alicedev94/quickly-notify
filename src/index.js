const baseService = require("./services/notify");
const EmailService = require("./services/notify/email");

const { createTransport } = require("nodemailer");

// Configuration.
const transConfig = require("./config/email/transporter");
const transporter = createTransport(transConfig);

// Instance.
const email = new EmailService(transporter);


// const notify = new baseService();

// Usage.
// notify.send("email to my customers..");

// this works well
// email.sendEmail();

// (async () => {

// })();
