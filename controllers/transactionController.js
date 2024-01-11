import { Transaction, Customer } from "../models/index.js";

const getAllById = async (req, res) => {
  try {
    const { id } = req.params;
    const transactionsCustomerById = await Transaction.findAll({
      where: { customerId: id },
      order: [["operation_date", "DESC"]],
      limit: 10,
      include: [
        {
          model: Customer,
          attributes: {
            exclude: ["bonus_password"],
          },
        },
      ],
    });
    res.json({ status: true, transactionsCustomerById });
  } catch (error) {
    console.log(error);
    res.json({ status: false, msg: "Server Error." });
  }
};

const getAllByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const transactionsByCategory = await Transaction.findAll({
      where: { operationCategoryId: category },
      include: [
        {
          model: Customer,
          attributes: {
            exclude: ["bonus_password"],
          },
        },
      ],
    });
    res.json({ status: true, transactionsByCategory });
  } catch (error) {
    console.log(error);
    res.json({ status: false, msg: "Server Error." });
  }
};

export { getAllById, getAllByCategory };
