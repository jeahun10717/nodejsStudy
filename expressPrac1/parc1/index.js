const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

let idFromPage;
let psFromPage;

const dataArr=
[['aaa','1111'],['bbb','1234'],['ccc','0000']]

const app = express();
const port = 4200;

app.use(express.json()); // axios 쓸려면 무조건 써야함 
app.use(bodyParser.urlencoded({extended : false}));
app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', (req,res)=>{
    res.render('mainPage');
})

app.post('/', (req,res)=>{
    idFromPage=req.body.id
    psFromPage=req.body.ps
    // let loginStatus=null;
    // for (let i = 0; i < dataArr.length; i++) {
    //     if((idFromPage===dataArr[i][0])&&(psFromPage===dataArr[i][1])){
    //         loginStatus=true;
    //     }
    // }

    // if(loginStatus===true){ // 로그인 성공시
    if(dataArr.filter(i=> i[0]===idFromPage && i[1] === psFromPage).length > 0){
        res.send({
            status: 200
        })
    }else{ // 로그인 실패시
        res.send({
            status: 401
        })
    }
})

app.get("/loginSuccess",(req, res)=>{
    res.send("성공했다냥");
});

app.listen(port, ()=>{
    console.log("port : ", port, " is listening");
})