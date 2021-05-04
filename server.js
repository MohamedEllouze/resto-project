const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./server/models/Contact");

const app = express();
const port = process.env.PORT || 4000;

const connectDB = require("./db");

const ContactRoute = require("./server/routes/contact.routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/contact", ContactRoute);
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
