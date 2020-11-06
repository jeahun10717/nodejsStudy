const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('this is admin page')

})
router.get('/producer', (req, res)=>{
    // res.send('this is producer page')
    res.render('admin/admin.html',{// /producer url 에 접근.
        message : 'hello? hi?'
    })
})

module.exports=router;