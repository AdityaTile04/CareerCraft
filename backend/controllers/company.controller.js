import Company from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Comapny name is required",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You can't register with same company name",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    res.status(201).json({
      message: "Company registered successfully",
      success: true,
      company,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCompany = async (req, res) => {
  try {
    const { id } = req.id;
    const companies = await Company.find({ userId: id });
    if (!companies) {
      return res.status(404).json({
        message: "No companies found",
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const comapanyId = req.params.id;
    const company = await Company.findById(comapanyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company found",
      success: true,
      company,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
