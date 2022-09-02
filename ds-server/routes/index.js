import express from "express";
import { 
    getAllFolders,
    getFolder,
    createFolder,
    updateFolder,
    deleteFolder   
} from "../controllers/Folders.js"; 
import { 
    getAllPages,
    getPage,
    createPage,
    updatePage,
    deletePage   
} from "../controllers/Pages.js"; 

const router = express.Router();
router.route('/folders')
    .get(getAllFolders)
    .post(createFolder);
router.route('/folders/:id')
    .get(getFolder)
    .put(updateFolder)
    .delete(deleteFolder);

router.route('/pages')
    .get(getAllPages)
    .post(createPage);
    
router.route('/pages/:id')
    .get(getPage)
    .put(updatePage)
    .delete(deletePage)

export default router;
