const Notify = require("../index");
// const transporter = { verify: () => Promise.resolve() }; // Mock del transporter o tu instancia real

// Body email.
const layout1 = require("../../../content/layout/first");

class Email {
  // extends
  constructor(transporter) {
    this.transporter = transporter;
    this.author = 'TEST-AUTHOR'
  }

  async sendEmail(client, header) {
    // console.log("1 - sendEmail return: layout1", layout1);
    const { response } = await this.transporter.sendMail({
      from: this.author, // evaluating.
      to: client, // evaluating.
      subject: header, // evaluating.
      html: layout1, // wired parameters.
    });
    console.log(response);
    return response;
  }
}

module.exports = Email;
