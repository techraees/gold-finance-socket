import BankDetail from './../Model/bankSchema.js';

export const createBankDetail = async (req, res) => {
  try {
    const bankDetail = await BankDetail.create(req.body);
    res.status(201).json(bankDetail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBankDetail = async (req, res) => {
  try {
    const bankDetail = await BankDetail.findOne();
    if (!bankDetail) {
      return res.status(404).json({ message: "Bank detail not found" });
    }
    res.json(bankDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBankDetail = async (req, res) => {
  try {
    const bankDetail = await BankDetail.findOne();
    if (!bankDetail) {
      return res.status(404).json({ message: "Bank detail not found" });
    }
    Object.assign(bankDetail, req.body);
    const updatedBankDetail = await bankDetail.save();
    res.json(updatedBankDetail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBankDetail = async (req, res) => {
  try {
    const bankDetail = await BankDetail.findOne();
    if (!bankDetail) {
      return res.status(404).json({ message: "Bank detail not found" });
    }
    await bankDetail.remove();
    res.json({ message: "Bank detail deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
