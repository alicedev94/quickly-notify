const baseService = require("./services/notify");
const EmailService = require("./services/notify/email");
require("dotenv").config();

const { createTransport } = require("nodemailer");

// Configuration.
const transConfig = require("./config/email/transporter");
const transporter = createTransport(transConfig);

// Instance.
const email = new EmailService(transporter);
// const notify = new baseService();

// Usage.
email.sendEmail(process.env.EMAIL_CLIENT, "Reparación de lavadora"); // Params client and header

// Async context
// (async () => {

// })();
