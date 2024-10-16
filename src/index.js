const EmailService = require("./services/notify/email");
const { createTransport } = require("nodemailer");

// Controllers
const send = require("./controllers/send/email");

// Configuration.
const transConfig = require("./config/email/transporter");
const transporter = createTransport(transConfig);

// Instance.
const objEmail = new EmailService(transporter);

// const notify = new baseService();

// Usage.
// Email for client (client).
// Who sends it (author).
// Type of service (message).

// Producction
const quickMailNotification = async (client, author, message, htmlConntent) => {
  try {
    if (!client || !author || !message || !htmlConntent) {
      throw new Error(
        "Error: This service require client, author and message."
      );
    } else {
      const response = await send(objEmail, client, author, message, htmlConntent);
      return response;
    }
  } catch (error) {
    return error;
  }
};

// Dev
module.exports = { quickMailNotification };
