# Node.js Express study part1
## [express 강의 참고링크](https://github.com/parkjunyoung/express-online)

## 1. Express 시작

### 1. Express를 사용하는 이유

![request, response](./imgFolder/expressStudyIMG1.png)

웹서버에서 사용자는 서버에게 요청을 하고 그 요청에 대한 답을 서버는 사용자에게 제공한다. 이러한 요청과 반응의 소스를 만들주는 것을 프레임워크라 한다. 여러가지의 프레임워크가 존재하는데 우리는 express 에 대해 알아볼 것이다.

### 2. 서버 만들어 보기

#### 1. express 가 아닐 경우

```javascript
const http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200, {'Context-Type' : 'text/plain'})
    response.write('Hello Server')
    response.end();
}).listen(3000);
```

위의 소스에서 3000 번의 포트에 서버를 생성하는 코드이다. response.writeHead 의 200 은 http 상태 코드인데 밑의 표를 참조하라.

|상태코드|설명|
|--|--|
|1XX|조건부응답|
|2XX|응답성공|
|3XX|리아이렉션|
|4XX|요청오류(ex 404 Not Found)|
|5XX|서버오류|

#### 2. express 로 서버를 띄울 경우

**[SOURCE]**

```javascript
const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(port, ()=>{
    console.log('Express Listening on Port', port);
})
```

**[CONSOLE]**
```
Express Listening on Port 3000
```

express 의 모듈을 require 를 통해 가져오고 app 에 express 모듈을 사용하며 저장했다. 이 때 만약에 수정사항이 생겨서 수정한 후 저장을 하더라도 수정된 소스는 반영이 되지 않는다. 서버는 이미 이전의 소스로 작동하고 있으므로 서버를 닫은 후 다시 열어서 수정사항을 반영하여야 한다. 이러한 소스의 변화를 실시간으로 감지하여 바로 반영할 수 있는 패키지가 2개 있다.

* supervisor
1. 설치
```
npm install supervisor -s
```
2. 실행
```
supervisor 파일명
```

* nodemon
1. 설치
```
npm install nodemon -s
```
2. 실행
```
nodemon 파일명
```

또한 이러한 모듈들을 사용자화 하여 npm 을 통해 호출 할 수 있다.

**[SOURCE-JSON]**

```json
{
  "name": "practice",
  "version": "1.0.0",
  "description": "express 연습",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "supervisor index.js"  
  },
  "author": "jeahun",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}

```

위의 json 소스에서 "scripts" 부분에서 "start" : "supervisor index.js" 를 추가하면 밑의 방식으로 패키지 사용이 가능하다. 이러한 방식으로 터미널에서 사용하는 npm 을 사용자화 하여 사용 할 수 있다.

**[TERMINAL]**
```
npm start
```

**[CONSOLE]**
```
Starting child process with 'node index.js'
Watching directory 'D:\javascript\nodejsStudy\expressStudyByFastCampus\additionalSouceCode\practice' for changes.
Press rs for restarting the process.
Express Listening on Port 3000
Received SIGINT, killing child process...
Parent process exiting, terminating child...
```

CONSOLE 창에서 볼 수 있듯 정상적으로 작동한다.


### 2. router

웹페이지의 복잡도가 지나치게 올라가면 수정이나 보완이 힘들다. 이러한 유지보수성을 올리기 위해 라우터를 사용하여 소스의 복잡도를 낮출 수 있다.

* 밑의 도표를 코딩한다고 가정하고 라우터를 쓰지 않는 코드와 라우터를 쓰는 코드를 비교해보자.

![라우터 x 코딩](./imgFolder/expressStudyIMG2.png)

#### 1. none Routes coding

**[SOURCE_noneRoutes]**

```javascript
const express = require('express');
const app = express();
const port = 3300;

app.get('/', (req, res)=>{
    res.send('this is main page')
})

app.get('/contact', (req, res)=>{
    res.send('url : localhost:3300/contact')
})

app.get('/producer',(req, res)=>{
    res.send('url : localhost:3300/producer')
})

app.get('/contact/list', (req, res)=>{
    res.send('url : localhost:3300/contact/list')
})

app.listen(port, ()=>{
    console.log('Express listening on port', port);
})
```
#### 2. use Routes coding
**파일 구조**
![라우터 쓰는 코딩](./imgFolder/expressStudyIMG3.png)

**[SOURCE_index.js]**

```javascript
const express = require('express');//express 모듈 사용

const contact = require('./contactRoutes/contact')//contact.js 소스가져옴
const producer = require('./producerRoutes/producer')//producer.js 소스가져옴

const app = express();
const port = 3300;

app.get('/', (req, res)=>{//메인페이지
    res.send('this is main page')
})

app.use('/contact', contact)//contact.js 소스 사용함
app.use('/producer', producer)//producer.js 소스 사용함

app.listen(port, ()=>{
    console.log('Express listening on port', port);
})
```

**[SOURCE_contact.js]**

```javascript
const express = require('express');//express 모듈 사용
const routerOfContact = express.Router();//express 모듈의 router 사용

routerOfContact.get('/', (req, res)=>{
    res.send('URL : localhost:3300/contact');
});

routerOfContact.get('/list', (req, res)=>{
    res.send('URL : localhost:3300/contact/list');
});

module.exports = routerOfContact;
//module.exports 를 통해 routerOfContact 를 내보냄
```

**[SOURCE_producer.js]**

```javascript
const express = require('express');
const routerOfProducer = express.Router();

routerOfProducer.get('/', (req, res)=>{
    res.send('URL : localhost:3300/producer');
});

module.exports = routerOfProducer;
```
