import { Sequelize } from "sequelize";
 
const db = new Sequelize('oc-cms', 'root', '', {
    dialect: "sqlite",
    storage: "/home/noah/repos/github.com/omnicommander/oc-cms/ds-server/dev.db"
});

export default db;
