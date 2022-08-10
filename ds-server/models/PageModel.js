import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
const Page = db.define('Page',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    json: {
        type: DataTypes.STRING,
    },
    customer_id: {
        type: DataTypes.INTEGER,
    },
    folder_id: {
        type: DataTypes.INTEGER,
    },
},{
    freezeTableName: true,
    timestamps: false,
});
 
export default Page;
