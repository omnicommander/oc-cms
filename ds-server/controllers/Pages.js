import Page from "../models/PageModel.js";
 
export const getAllPages = async (req, res) => {

    try {
        const result = await Page.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }  
}
 
export const getPageByCustomerId = async (req, res) => {
    try {
        const result = await Page.findOne({
            where: {
                customer_id: req.params.id
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
}
export const getPage = async (req, res) => {
    try {
        const result = await Page.findOne({
            where: {
                id: req.params.id
            }
        });
        console.log(res);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
} 
export const createPage = async (req, res) => {
    try {
        await Page.create(req.body);
        res.status(200).json({
            "message": "success"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }  
}
 
export const updatePage = async (req, res) => {
    try {
        await Page.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "success"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
}
 
export const deletePage = async (req, res) => {
    try {
        await Page.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            "message": "success"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
}
