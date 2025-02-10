const express = require('express');
const router = express.Router();


const input =require(`/Users/admin/Documents/CS 312/feb6/controllers/input.js`);
router.get('/',input.getaddinput);
router.post('',input.postaddinput);
router.get('/extra',input.getadd);


module.exports = router;
// similiar to admin.js
