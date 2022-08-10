import express from "express";
import db from "./config/database.js";
import apiRoutes from "./routes/index.js";
import grapesRoutes from "./routes/grapes.js"
import cors from "cors";

import Folder from './models/FolderModel.js'
import Page from './models/PageModel.js'
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})
app.use('/api/v1', apiRoutes);
app.use('/grapes/v1', grapesRoutes);

db.sync().then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
})

