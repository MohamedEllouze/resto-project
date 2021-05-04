const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const Contact = require("../models/Contact");

router.route("/").post((req, res, next) => {
  console.log(req.body);
  Contact.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
router.route("/").get((req, res, next) => {
  try {
    Contact.find({}).exec(req.body, (error, data) => {
      res.json(data);
    });
  } catch (e) {
    res.status(500).send();
  }
});
module.exports = router;
