const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ozwaldvieth@gmail.com",
    subject: "Welcome to The Team!",
    text: `Welcome to the team, ${name}
        We're delighted to have you! Please provide any feedback that you have.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ozwaldvieth@gmail.com",
    subject: "Sorry To See You Go!",
    text: `Hey ${name},
        
        I see you've opted to cancel service with us. I wish you the best with all of your future endeavors. Is there anything that you wished we had done better, or that we could have done to keep you? 
        
        Thanks Again, 
        Austin Vieth`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
