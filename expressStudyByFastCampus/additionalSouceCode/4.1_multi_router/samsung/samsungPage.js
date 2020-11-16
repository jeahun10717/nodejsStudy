const express = require('express');
const routerSamsung = express.Router();
const galaxy = require('./galaxy/galaxyPage')
const gtab = require('./gTab/gtabPage')

routerSamsung.use('/galaxy', galaxy);
routerSamsung.use('/gtab', gtab);

routerSamsung.get('/', (req, res)=>{
    res.send('this is `samsung` 페이지')
})

module.exports=routerSamsung;