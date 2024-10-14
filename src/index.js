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
email.sendEmail("dilan.marcano.jesus@gmail.com", "Reparación de lavadora"); // Params client and header

// Async context
// (async () => {

// })();
