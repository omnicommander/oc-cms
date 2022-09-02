import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
const Folders = db.define('page-folders',{

    foldername:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Folders;
