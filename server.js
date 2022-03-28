const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path')
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// if we're in production, serve app/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './app/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './app/build/index.html'));
});


let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// verify connection configuration
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post('/send', (req, res) => {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.name}`,
    text: `${req.body.mailerState.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  })
});


app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
