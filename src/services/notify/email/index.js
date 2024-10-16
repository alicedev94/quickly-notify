const Notify = require("../index");
// const transporter = { verify: () => Promise.resolve() }; // Mock del transporter o tu instancia real

// Body email.
const layout1 = require("../../../content/layout/first");

class Email {
  // extends
  constructor(transporter) {
    this.transporter = transporter;
  }

  async sendEmail(client, author, issue, htmlConntent) {
    const { response } = await this.transporter.sendMail({
      from: author, // evaluating.
      to: client, 
      subject: issue, 
      html: htmlConntent, 
    });
    return response;
  }
}

module.exports = Email;
