const { transactions, customers, products } = require("../../models")

exports.getTransactions = async (req, res) => {
    try {
        const transaction = await transactions.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            transaction
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.addTransaction = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        
        const transaction = await transactions.create(data)

        res.status(200).send({
            status: "success",
            transaction
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getTransactionByCustomer = async (req, res) => {
    try {
        const customer = await customers.findAll({
            include: {
                model: transactions,
                as: "transaction",
                include: {
                    model: products,
                    as: "product",
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
            },
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
