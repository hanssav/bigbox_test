const express = require("express");

const router = express.Router();

const { addCustomer, getCustomers } = require('../controllers/customer')
const { addProduct, getProducts } = require('../controllers/product')
const { addTransaction, getTransactions, getTransactionByCustomer } = require('../controllers/transactions')

router.post('/addCustomer', addCustomer)
router.get('/getCustomers', getCustomers)


router.post('/addProduct', addProduct)
router.get('/getProducts', getProducts)

router.post('/addTransaction', addTransaction)
router.get('/getTransactions', getTransactions)
router.get('/getTransactionByCustomer', getTransactionByCustomer)


module.exports = router;