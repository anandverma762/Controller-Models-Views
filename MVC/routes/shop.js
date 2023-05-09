const path = require('path');

const express = require('express');

const adminroutes = require('../controllers/productcontroller');



const router = express.Router();

router.get('/', adminroutes.shopproduct);

module.exports = router;
