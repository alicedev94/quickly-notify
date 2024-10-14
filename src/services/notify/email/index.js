const Notify = require("../index");
// const transporter = { verify: () => Promise.resolve() }; // Mock del transporter o tu instancia real

class Email {
  // extends
  constructor(transporter) {
    this.transporter = transporter;
  }

  async sendEmail() {
    // console.log("1 - sendEmail return: ", message);
    // send mail with defined transport object
    const info = await this.transporter.sendMail({
      from: 'qUIXK" <portalspitiendasdaka@gmail.com>', // sender address
      to: "d.marcano.jesus@gmail.com", // list of receivers
      subject: "REGISTRO ✔", // Subject line ASUNTO
      //text: "Hello world?", // plain text body
      html: `<h1>quicly-sends<h1/>`, // html body
    });
    console.log(info);
  }
}

module.exports = Email;
