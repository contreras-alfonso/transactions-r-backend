import {DataTypes} from "sequelize";
import db from "../config/db.js";

const operationCategory = db.define('operation_category',{
    
    category_name: {
        type: DataTypes.STRING,
        allowNull:false,
    },

})

export default operationCategory 