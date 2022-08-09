import { Sequelize } from "sequelize";
 
const db = new Sequelize('oc-cms', 'root', '', {
    host: "localhost",
   
    dialect: "mysql"
});



export default db;