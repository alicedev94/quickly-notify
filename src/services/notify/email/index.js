const Notify = require("../index");
// const transporter = { verify: () => Promise.resolve() }; // Mock del transporter o tu instancia real

class Email extends Notify {
  constructor(transporter) {
    this.transporter = transporter;
  }

  sendEmail(message) {
    console.log(this.transporter);
    // console.log("1 - sendEmail return: ", message);
    this.transporter.verify().then(() => {
      console.log("Ready for send emails");
    });
    // this.send(message);
  }
}

module.exports = Email;
