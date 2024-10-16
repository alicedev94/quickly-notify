# quickly-notify
Quickly Notify is an agile and user-friendly service that allows developers to send push notifications and emails efficiently. Designed to simplify communication with users, Quickly Notify ensures quick integration and reliable delivery of notifications and emails.

# !Important to read before continuing.

 **SMTP_HOST=smtp.gmail.com Default settings for the Google server)**
 **SMTP_PORT=465 Default settings for the Google server**
 **SMTP_SECURE=true Default settings for the Google server**
 **SMTP_USER="test.user1@example.com" This email must be registered as a developer in Gmail**
 **SMTP_PASS="1An3C0FZaNU" Key assigned by Gmail** 

##  Installation: 
```
npm install quickly-notify
```

##  Use to library: 
```
const { quickMailNotification } = require("quickly-notify");
```

## Necessary parameters:

1. Email for client (client).
2. Who sends it (author).
3. Type of service (message).
4. This is the body of the email that will reach your clients (htmlConntent)

```
const  client = "test.user@example.com"
const  author= "Test Subject"
const  message= "This is a test message for product change."
const htmlConntent = "<h1>Example body email<h1/>";
```

## Async context:
```
(async () => {
  try {
    const response = await quickMailNotification(
     client, 
      author,
      message,
      htmlConntent
    );
    console.log("#response", response);
     return this response.
  } catch (error) {
    console.error(error);
     return this response.
  }
})();
```
