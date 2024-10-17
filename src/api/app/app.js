const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");

app.use(bodyParser.json());

// VAPID keys should be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails(
  "mailto:test@example.com",
  "BD_ZMjYJnK7XVLJYioT6mjqzWGZ31hDFK4y759zBDDXBw1qktWUaAf5VRtX3nQTcKIh74hbIIRz9c4mTD5kf6RQ", //vapidKeys.publicKey,
  "b_vMob27tSX8Y1YGJEsq6CRC-wgV3lpku26o1GjLlew" //vapidKeys.privateKey
);

// console.log(vapidKeys)

const publicRoute = path.join(__dirname, "../public");

app.use(express.static(publicRoute));

app.post("/api/subscription", (req, res) => {
  const subscription = req.body;
  res.status(201).json({});

  const payload = JSON.stringify({
    title: "Nueva notificación",
    body: "Lorem ipsum dolor sit amet.",
    icon: "/logo-deno-132x132.png",
  });

  webpush.sendNotification(subscription, payload).catch((error) => {
    console.error("err", error.stack);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
