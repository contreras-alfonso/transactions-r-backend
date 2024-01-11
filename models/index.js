import Transaction from "./transactionModel.js";
import Customer from "./customerModel.js";
import operationCategory from "./operationCategoryModel.js";

Customer.hasMany(Transaction);
Transaction.belongsTo(Customer);
Transaction.belongsTo(operationCategory);
operationCategory.hasMany(Transaction);

export {
    Customer,
    Transaction,
    operationCategory,
}
