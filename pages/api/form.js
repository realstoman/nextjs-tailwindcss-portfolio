const sgMail = require("@sendgrid/mail");
require('dotenv').config()

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
  const sendGridMail2 = {
    to: body.email,
    from: process.env.MAIL_PERSO, // Use the email address or domain you verified above
    subject: "Merci de votre prise de contact avec moi",
    text:
      "Vous m'avez envoyé ce message, et je vous en remercie: \n\n --- " +
      body.message + "\n\n Je vous répondrai dès que possible. \n\n Cordialement, \n Grégory Morel",
  };
  (async () => {
    try {
      await sgMail.send(sendGridMail2);
      
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
  res.status(200).json({ message: "Message envoyé!" })  
}
