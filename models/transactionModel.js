import {DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

const Transaction = db.define('transactions',{
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    operation_date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    amount_paid:{
        type: DataTypes.FLOAT,
        allowNull:false,
    },
    deposited_amount:{
        type: DataTypes.FLOAT,
        allowNull:false,
    },

})

export default Transaction 