import Folders from "../models/FolderModel.js";
 
export const getAllFolders = async (req, res) => {

    try {
        const pages = await Folders.findAll();
        res.json(pages);
    } catch (error) {
        console.log(error);
        res.json({ message: error.message });
    }  
}
 
export const getFoldersByCustomerId = async (req, res) => {
    try {
        const user = await Folders.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(user[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
export const getFoldersByFolderId = async (req, res) => {
    try {
        const Folder = await Folders.findAll({
            where: {
                customer_id: req.params.id
            }
        });
        console.log(res);
        res.json(Folder[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
export const createFolder = async (req, res) => {
    console.log(req.body)
    console.log('=======================')
    try {
        await Folders.create(req.body);
        res.json({
            "message": "Folder Created"
        });
    } catch (error) {
        console.log(res.body)
        console.log('=======================')
        res.json({ message: error.message });
    }  
}
 
export const updateFolder = async (req, res) => {
    try {
        await Folders.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Folder Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteFolder = async (req, res) => {
    try {
        await Folders.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Folder Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}