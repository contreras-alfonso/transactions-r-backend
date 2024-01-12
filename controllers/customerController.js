import { Op } from "sequelize";
import { Customer } from "../models/index.js";

const getAllCustomers = async (req, res) => {
  try {
    const { page } = req.params;
    const pageSize = 10;

    const customers = await Customer.findAll({
      attributes: { exclude: ["bonus_password"] },
      order: [["id", "DESC"]],
      limit: pageSize,
      offset: (page - 1) * pageSize,
    });

    res.json({ status: true, customers });
  } catch (error) {
    console.log(error);
    res.json({ status: false, msg: "Server error." });
  }
};

const getCustomer = async (req, res) => {
  try {
    const { dniOrName } = req.params;

    const customers = await Customer.findAll({
      attributes: { exclude: ["bonus_password"] },
      where: {
        [Op.or]: [
          { dni: { [Op.like]: `%${dniOrName}%` } },
          { names: { [Op.like]: `%${dniOrName}%` } },
        ],
      },
    });

    if (!customers || customers.length === 0) {
      return res.json({
        status: false,
        msg: "No customers found.",
        customers: [],
      });
    }

    res.json({ status: true, customers });
  } catch (error) {
    console.error(error);
    res.json({ status: false, msg: "Server error." });
  }
};

export { getAllCustomers, getCustomer };
