import mongoose from "mongoose";

const { Schema, model } = mongoose;

const navbarSchema = new Schema({
  label: String,
  link: String
});

export default model("Navbar", navbarSchema);
