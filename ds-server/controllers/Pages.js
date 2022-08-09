import Pages from "../models/PageModel.js";
 
export const getAllPages = async (req, res) => {

    try {
        const pages = await Pages.findAll();
        res.json(pages);
    } catch (error) {
        console.log(error);
        res.json({ message: error.message });
    }  
}
 
export const getPagesByCustomerId = async (req, res) => {
    try {
        const user = await Pages.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(user[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
export const getPagesByPageId = async (req, res) => {
    try {
        const Page = await Pages.findAll({
            where: {
                customer_id: req.params.id
            }
        });
        console.log(res);
        res.json(Page[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
} 
export const createPage = async (req, res) => {
    console.log(req.body)
    console.log('----------------')
    try {
        await Pages.create(req.body);
        res.json({
            "message": "Page Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatePage = async (req, res) => {
    try {
        await Pages.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Page Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletePage = async (req, res) => {
    try {
        await Pages.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Page Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}