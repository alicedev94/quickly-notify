require("dotenv").config();

const main = async (objEmail, client, author, message, htmlConntent) => {
  const response = await objEmail.sendEmail(
    client,
    author.toLocaleUpperCase(),
    message.toLocaleUpperCase(),
    htmlConntent
  );
  return response;
};

module.exports = main;
