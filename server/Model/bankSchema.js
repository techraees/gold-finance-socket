import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const bankSchema = new Schema({
  bankName: String,
  accountName: String,
  accountNumber: String,
  ifscCode: String,
  branchName: String
});

const BankDetail = model('BankDetail', bankSchema);

export default BankDetail; // Export the model
