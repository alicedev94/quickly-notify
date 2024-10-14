const baseService = require("./services/notify");
const EmailService = require("./services/notify/email");

const { createTransport } = require("nodemailer");

// Configuration.
const transConfig = require("./config/email/transporter");

// Instance.
const email = new EmailService();

const transporter = createTransport(transConfig);
const notify = new baseService(transporter);

// Usage.
notify.send("email to my customers..");
email.sendEmail();

// (async () => {

// })();
