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


