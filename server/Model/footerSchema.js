// footerModel.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const footerSchema = new Schema({
  logoSrc: String,
  logoLink: String,
  description: String,
  socialMediaLinks: [{
    name: String,
    url: String,
    icon: String
  }],
  usefulLinks: [{
    name: String,
    url: String,
    icon: String
  }],
  services: [{
    name: String,
    description: String,
    icon: String
  }],
  contact: {
    phone: String,
    email: String,
    address: String
  },
  copyright: String
});

export default model("Footer", footerSchema);
