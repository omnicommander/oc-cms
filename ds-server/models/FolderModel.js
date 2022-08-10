import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
const Folder = db.define('Folder', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true, 
    }, 
    foldername: { 
        type: DataTypes.STRING, 
    }, 
},{
    freezeTableName: true, 
    timestamps: false, 
});
 
export default Folder;
