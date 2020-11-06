const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    // res.send('this is client page')
    res.render('client/client.html', {
        message : 'this is client page_by view engine'
    })
})

module.exports=router;