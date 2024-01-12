import { Transaction, Customer, operationCategory } from "../models/index.js";

const getAllByCustomerId = async (req, res) => {
  try {
    const { id, page } = req.params;

    const pageSize = 10;

    const offset = (page - 1) * pageSize;

    const transactionsCustomerById = await Customer.findOne({
      where: { id },
      attributes: {
        exclude: ["bonus_password"],
      },
      include: [
        {
          model: Transaction,
          order: [["operation_date", "DESC"]],
          limit: pageSize,
          offset: offset,
          include: [
            {
              model: operationCategory,
            },
          ],
        },
      ],
    });
    if (!transactionsCustomerById)
      return res.json({ status: false, msg: "The user does not exist." });
    const totalTransactions = await Transaction.count({
      where: { customerId: id },
    });
    res.json({
      status: true,
      customer: transactionsCustomerById,
      totalTransactions,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: false, msg: "Server Error." });
  }
};

const getAllByCategory = async (req, res) => {
  try {
    const { category, page } = req.params;
    const pageSize = 10;

    const offset = (page - 1) * pageSize;
    const transactionsByCategory = await Transaction.findAll({
      order: [["operation_date", "DESC"]],
      where: { operationCategoryId: category },
      limit: pageSize,
      offset: offset,
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

export { getAllByCustomerId, getAllByCategory };
