const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('resume data displayed');
})

module.exports = router;