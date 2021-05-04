const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StarxContactSchema = new Schema({
  image: {
    _url: { type: String },
    _delete_url: { type: String },
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  addressCountry: { type: String, default: "Tunisia" },
  addressCountryIso: { type: String, default: "TN" },
  addressLocality: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  whatsAppNumber: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  nrc: {
    type: String,
  },
  password: {
    type: String,
  },
  imagecr: {
    _url: { type: String },
    _delete_url: { type: String },
  },
});
module.exports = mongoose.model("starx_contact", StarxContactSchema);
