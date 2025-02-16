const express = require('express');
const router = express.Router();


const input =require(`../controllers/input.js`);
const extrapage =require(`../controllers/extra.js`);
const Digital =require(`../controllers/digitalvoice.js`);
router.get(`/Digitalvoice`,Digital.getadddigital)
router.get('/',input.getaddinput);
router.post('',input.postaddinput);
router.get('/extra',extrapage.getextra);


module.exports = router;
// similiar to admin.js
