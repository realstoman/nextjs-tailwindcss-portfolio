const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  // Variables
  const body = req.body;

  // Création du message
  const sendGridMail = {
    to: process.env.MAIL_PERSO,
    from: process.env.MAIL_PERSO, // Use the email address or domain you verified above
    subject: body.subject + " - " + body.name + " - " + body.email,
    text: body.message,
  };

  try {
    await sgMail.send(sendGridMail);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }

  const sendGridMail2 = {
    to: body.email,
    from: process.env.MAIL_PERSO, // Use the email address or domain you verified above
    subject: "Merci de votre prise de contact avec moi",
    text: body.message,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Grégory MOREL</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />       
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3> ${body.name}, vous m'avez contacté via le formulaire de contact et je vous en remercie.</h3>
              <div style="font-size: 16px;">
              <p>Votre message était le suivant:</p>
              <p style="font-style: italic">${body.message}</p>
              <br>
              </div>
              <p style="font-weight:bold; font-size: 20px">Je vous répondrai dans les plus brefs délais.</p>   
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Cordialement, <br>Grégory MOREL<br> Alternant Concepteur Developpeur d'application<br>06 60 90 56 56</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
              <a href="https://myportfoliov2-beta.vercel.app"><img src="https://myportfoliov2-beta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-light.ccf7db5f.png&w=64&q=75" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;"></a> 
              <a href="https://www.linkedin.com/in/gregory-morel/"><img src="https://media-exp1.licdn.com/dms/image/D4E35AQH4xpRN6NDOug/profile-framedphoto-shrink_200_200/0/1663789782362?e=1666814400&v=beta&t=_buv6xc5cGYf37__gaSPktiOtgsSGt8WtVL6aYnYeRw" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;"></a> 
                              
              </div>
              </div>
      </body>
      </html>`,
  };
  try {
    await sgMail.send(sendGridMail2);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
  res.status(200).json({ message: "Message envoyé!" });
}

export default handler;
