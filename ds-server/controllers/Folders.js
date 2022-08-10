import Folder from "../models/FolderModel.js";
 
export const getAllFolders = async (req, res) => {

    try {
        const result = await Folder.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }  
}
 
export const getFolderByCustomerId = async (req, res) => {
    try {
        const result = await Folder.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
}

export const getFolder = async (req, res) => {
    try {
        const result = await Folder.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
} 

export const createFolder = async (req, res) => {
    console.log(req.body)
    try {
        await Folder.create(req.body);
        res.status(200).json({
            "message": "success"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }  
}
 
export const updateFolder = async (req, res) => {
    try {
        await Folder.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "success"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }  
}
 
export const deleteFolder = async (req, res) => {
    try {
        await Folder.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "success"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }  
}
