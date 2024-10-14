// @ts-check

class Notify {
  constructor() {}

  send(message) {
    console.log("0 - send return: ", message);
    return message;
  }
}

module.exports = Notify;
