const sgMail = require("@sendgrid/mail");
export default function handler(req, res) {
  // Variables
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const body = req.body;

  // Création du message
  const sendGridMail = {
    to: process.env.MAIL_PERSO,
    from: process.env.MAIL_PERSO, // Use the email address or domain you verified above
    subject: body.subject + " - " + body.name + " - " + body.email,
    text: body.message,
  };
  //console.log("sendGridMail =", sendGridMail);

  // SendGrid
  (async () => {
    try {
      await sgMail.send(sendGridMail);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
}
