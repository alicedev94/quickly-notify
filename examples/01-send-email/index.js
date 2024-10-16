// !Important to read before continuing
// SMTP_HOST=smtp.gmail.com  # Default settings for the Google server
// SMTP_PORT=465  # Default settings for the Google server
// SMTP_SECURE=true  # Default settings for the Google server
// SMTP_USER="test.user1@example.com"  # This email must be registered as a developer in Gmail
// SMTP_PASS="1An3C0FZaNU"  # Key assigned by Gmail

// Use to library

const { quickMailNotification } = require("../../src/index");

// improvement opportunity for this development.
// 1 - return a success error in javascript.

const htmlConntent = `<h1>Example body email<h1/>`;

// Async context
(async () => {
  try {
    const response = await quickMailNotification(
      "test.user@example.com",
      "Test Subject",
      "This is a test message for product change.",
      htmlConntent
    );
    console.log("#response", response);
    // return this response.
  } catch (error) {
    console.error(error);
    // return this response.
  }
})();
