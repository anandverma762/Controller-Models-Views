const path = require('path');

const express = require('express');

const adminroutes = require('../controllers/product');



const router = express.Router();

router.get('/', adminroutes.shopproduct);

module.exports = router;
