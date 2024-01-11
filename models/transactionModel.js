import {DataTypes} from "sequelize";
import db from "../config/db.js";

const Transaction = db.define('transactions',{
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    operation_date: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    amount_paid:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    deposited_amount:{
        type: DataTypes.STRING,
        allowNull:false,
    },

})

export default Transaction 