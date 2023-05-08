const path = require('path');

const express = require('express');


const  productcontroller = require('../controllers/product');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product',productcontroller.getproductadd);

// /admin/add-product => POST
router.post('/add-product', productcontroller.getproduct);



module.exports = router;
