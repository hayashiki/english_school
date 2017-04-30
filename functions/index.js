var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
const mailto = "h.masako123@gmail.com"
const mailfrom = '"英会話教室P.E.C 松江" <noreply@firebase.com>'

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmailConfirmation = functions.database.ref('/contact/{uid}').onWrite(event => {
  const snapshot = event.data;
  const val = snapshot.val();

  if (!snapshot.changed('subscribedToMailingList')) {
    return;
  }

  const mailOptions = {
    from: mailfrom,
    to: mailto
  };

  // The user just subscribed to our newsletter.
  if (val.subscribedToMailingList) {
    mailOptions.subject = '英会話教室P.E.C 松江への問い合わせ';
    mailOptions.text = `英会話教室P.E.C 松江へ問い合わせがありました。\n問い合わせ日時: ${request_time}\nお名前: ${val.username}\nemail: ${val.email}\n電話番号： ${val.tel}\n問い合わせ内容： ${val.content}`;
    return mailTransport.sendMail(mailOptions).then(() => {
      // console.log('New subscription confirmation email sent to:', val.email);
    });
  }

  // The user unsubscribed to the newsletter.
  mailOptions.subject = 'Sad to see you go :`(';
  mailOptions.text = 'I hereby confirm that I will stop sending you the newsletter.';
  return mailTransport.sendMail(mailOptions).then(() => {
    // console.log('New unsubscription confirmation email sent to:', val.email);
  });
});
