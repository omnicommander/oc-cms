import Page from '../models/PageModel.js'

export const getPageJSON = async (req, res) => {
    console.log(req.params)
    try {
        const result = await Page.findOne({
            where: {
                id: req.params.id
            }
        });
        console.log(result.json);
        console.log('======================================================')
        const theJson = JSON.stringify(res.json)
        res.json(theJson)
    } catch (error) {
        console.log(error.message);
        console.log('======================================================')
        res.status(500).json({ message: error.message });
    }
}

export const storePageJSON = async (req, res) => {
    console.log('STORE DATA')
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
