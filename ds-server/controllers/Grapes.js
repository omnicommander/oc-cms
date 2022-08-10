import Page from '../models/PageModel.js'

export const getPageJSON = async (req, res) => {
    try {
        const result = await Page.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(JSON.parse(result.json))
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const storePageJSON = async (req, res) => {
    try {
        const pageJson = JSON.stringify(req.body)
        const result = await Page.findOne({
            where: {
                id: req.params.id
            }
        })

        result.set({
            json: pageJson
        })

        await result.save()

        res.json({
            "message": "success"
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}
