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
      res.json({ status: false, msg: "Server error." });
    }
};

export {getAllCustomers}