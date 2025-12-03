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
    to: "fa8813121@gmail.com",
    subject: "New Order",
    text: `
      Name: ${name}
      Email: ${email}
      Product: ${product}
      Price: ${price}
    `
  };

  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      return res.status(500).json({ message: "Server configuration error. Missing email credentials." });
    }
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Email failed: " + err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
