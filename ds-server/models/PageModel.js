import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
const Pages = db.define('websitepages',{
    customer_id:{
        type: DataTypes.INTEGER
    },
    folder_id:{
        type: DataTypes.INTEGER
    },
    json: {
        type: DataTypes.STRING,
    },
    content:
    {
        type: DataTypes.STRING
    },
    page_name:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Pages;'n'