import express from "express";


import { 
    getAllFolders,
    getFoldersByCustomerId,
    createFolder,
    updateFolder,
    deleteFolder   
} from "../controllers/Folders.js"; 
import { 
    getAllPages,
    getPagesByCustomerId,
    createPage,
    updatePage,
    deletePage   
} from "../controllers/Pages.js"; 

const router = express.Router();

router.get('/folders', getAllFolders);
router.get('/folders/:id', getFoldersByCustomerId);
router.post('/folders/create/', createFolder);
router.patch('/folders/update/:id', updateFolder);
router.delete('/folders/remove/:id', deleteFolder);

router.get('/pages', getAllPages);
router.get('/pages/:id', getPagesByCustomerId);
router.post('/pages/create/', createPage);
router.patch('/pages/update/:id', updatePage);
router.delete('/pages/remove/:id', deletePage);

export default router;