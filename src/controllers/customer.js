const { customers} = require("../../models")

exports.addCustomer = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        
        const customer = await customers.create(data)

        console.log("customer", createCustomer)


        res.status(200).send({
            status: "success",
            customer
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getCustomers = async (req, res) => {
    try {
        const customer = await customers.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            customer
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}
