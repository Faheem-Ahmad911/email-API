const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Serve form.html as the root route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/send-email", async (req, res) => {
  const { name, email, product, price } = req.body;

  // configure transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: "faheemofficial1515@gmail.com",
    to: "bsdsf23m006@pucit.edu.pk",
    subject: "New Order",
    text: `
      Name: ${name}
      Email: ${email}
      Product: ${product}
      Price: ${price}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Email failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
