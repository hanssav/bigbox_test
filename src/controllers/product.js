const { products } = require("../../models")


exports.getProducts = async (req, res) => {
    try {
        const showProducts = await products.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            showProducts
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.addProduct = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        
        const product = await products.create(data)

        res.status(200).send({
            status: "success",
            product
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}