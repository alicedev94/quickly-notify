const axios = require("axios");
require("dotenv").config();

// await unsubscribe();
// await subscription();

class main {
  constructor() {
    this.PUBLIC_VAPID_KEY =
      "BD_ZMjYJnK7XVLJYioT6mjqzWGZ31hDFK4y759zBDDXBw1qktWUaAf5VRtX3nQTcKIh74hbIIRz9c4mTD5kf6RQ";
  }

  urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  async unsubscribe() {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
      console.log("Desuscrito con éxito");
    }
  }

  async subscription() {
    const register = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: this.urlBase64ToUint8Array(this.PUBLIC_VAPID_KEY),
    });

    let http = route + "/subscription";
    const response = await axios.post(http, subscription, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }

  testScope () {
    return 'uundefined...!'
  }
}

module.exports = main;
