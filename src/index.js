const EmailService = require("./services/notify/email");
const PushService = require("./services/notify/webPush");
const { createTransport } = require("nodemailer");

// Controllers
const send = require("./controllers/send/email");

// Configuration.
const transConfig = require("./config/email/transporter");
const transporter = createTransport(transConfig);

// Instance.
const objEmail = new EmailService(transporter);
const objOPush = new PushService();

// Producction
const quickMailNotification = async (client, author, message, htmlConntent) => {
  try {
    if (!client || !author || !message || !htmlConntent) {
      throw new Error(
        "Error: This service require client, author and message."
      );
    } else {
      const response = await send(
        objEmail,
        client,
        author,
        message,
        htmlConntent
      );
      return response;
    }
  } catch (error) {
    return error;
  }
};

const quickPushNotification = async () => {
  const resposne = objOPush.testScope();
  console.log("resposneresposneresposneresposne",resposne);
};

// Dev
module.exports = { quickMailNotification, quickPushNotification };
