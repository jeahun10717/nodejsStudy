# QUESTION & ANSWER
* express 공부하면서 나온 질문 외에도 다른 질문도 할거임

|Q&A index|해결 여부|Q&A index|해결 여부|
|---|---|---|---|
|1|`complete`|11||
|2|`complete`|12||
|3|`complete`|13||
|4|X|14||
|5|X|15||
|6|X|16||
|7|`complete`|17||
|8|`complete`|18||
|9|`complete`|19||
|10||20||

---

## QUESTION_1 : module.exports

`module.exports = 변수` 에서 `module.exports` 는 어디에 변수를 보내는 거?

## ANSWER_1

```javascript
module.exports = app;
```

위의 소소는 `app` 이라고 하는 변수(객체)를 `module.exports` 를 통해 전역객체로 보내게 된다. 이렇게 전역으로 보내진 객체는 아래와 같은 소스로 프로젝트 안에서 어디서든 접근이 가능하다.

```javascript
const 변수 = require('js파일경로')
```

---

## QUESTION_2 : const app = express()

```javascript
const app = express
```

위의 소스에서 app 에 굳이 저장을 해야 하는 건가? app 에 저장하는 것이 아니라 사용자가 지정한 변수에 저장하면 안됨?

## ANSWER_2

```javascript
const app = express();
```

위의 소스는 `app` 이라는 변수에 `express` 모듈을 저장하여 `app` 의 하위 메소드나 프로퍼티로 `express` 를 사용하기 위한 소스이다. 따라서 app 이 아닌 다른 변수를 사용하더라도 문제가 없다.

---

## QUESTION_3 : multi router source

아래와 같은 폴더 구조로 router 를 다중으로 쓰는 소스를 만들 수 있음?

![Multi router Source](./imgFolder/expressStudyIMG9.png)

## ANSWER_3

소스 짜 놨음 참고하셈. 링크는 밑에
[link](https://github.com/jeahun10717/nodejsStudy/tree/master/expressStudyByFastCampus/additionalSouceCode/4_multi_router)

---

## QUESTION_4 : DOM

DOM 구조란?

## ANSWER_4

---

## QUESTION_5 : res, req, next

```javascript
app.get('/', (req,res)=>{
  res.render('file');
  res.send('this is file of pug')
})
```

위의 소스는 동작하지 않는다. 이유는? => `res` 에 관해 공부하기

## ANSWER_5

---

## QUESTION_6 : refused to apply~ 오류 해결

`Refused to apply style MIME type error` 오류 해결방법

1. 이거 오류 발생하는데 해결방법으로 static 설정을 추가하면 되는데 왜 추가해야 함?
2. 정확한 해결방법과 제일 좋은 방식으로 front 작성하는 방법은?

질문에 대한 소스는 [이 링크의]() `4_viewInheritance` 폴더를 참고할 것
[이 링크](https://expressjs.com/ko/starter/static-files.html)를 참조하여 공부해 볼 것.

## ANSWER_6

---

## QUESTION_7 : template 에서 다른 파일 참조

![express 파일 참조](./imgFolder/expressStudyIMG10.png)

위의 도식에서 `mainPage.pug` 는 `header.pug` 파일을 `extend` 한다. 이렇게 같은 폴더 안에 있는 파일을 `extends` 하는 건 할 수 있겠는데 외부 폴더에 있는 건 어떻게 접근해야 하나? 밑의 도식처럼 코딩을 하려면 어떻게 해야 하나? 즉 `./mainFolder/admin/adminPage.pug` 에서 `./mainFolder/layout/header.pug` 를 참조(`extends`) 하고 싶은데 어떻게 해야 함?

![express 파일 참조](./imgFolder/expressStudyIMG11.png)

[소스 파일이 이 링크를 타고 가면 됨]()

## ANSWER_7

위의 질문을 해결하기 위해서는 아래의 2가지 문제를 해결해야 한다.

1. 다른 폴더에 존재하는 파일을 접근하는 것
2. `extend <file path>` 부분의 의미

* `1.` 에 대한 답은 간단하다. 아래의 표를 보고 확인해 보자.
```
/   = Root directory
.   = This location(현재 위치)
..  = Up a directory(상위 위치)
./  = Current directory(최근 위치)
../ = Parent of current directory(최근 위치의 상위 위치)
../../ = Two directories backwards
```

* `2.` 에 대해 알아보자.

file path 는 말 그대로 extends 할 파일이 존재하는 위치이다. 위의 1. 의 답의 표를 보고 작성하면 된다.

[이를 해결한 소스는 이 링크로 가면 된다.](https://github.com/jeahun10717/nodejsStudy/tree/master/expressStudyByFastCampus/additionalSouceCode/4.2_viewInheritance)

## QUESTION_8 : express.static()

```javascript
express.static('/URL', 'filePath') 에서 url 부분 정확히 이해가 안됨
```

이 링크의 소스에서 index.js 부분을 보면

### 문제상황 1

```javascript
app.use('/imgURL', express.static('imgFiles'))// 정적파일 설정
```

위의 소스를 사용하면 아래와 같이 `http://localhost:4000` 에서 이미지가 출력이 안된다.

![error img](./imgFolder/expressStudyIMG24.png)

하지만 `http://localhost:4000/imgURL/expressStudyImg19.png` 로는 들어가 진다.

### 문제상황 2

```javascript
app.use('/imgFiles', express.static('imgFiles'))// 정적파일 설정
```

위의 소스를 사용하면 즉 `/URL` 부분과 `filePath` 부분이 일치하면 아래와 같이 `http://localhost:4000` 부분은 출력이 되나 `http://localhost:4000/imgURL/expressStudyImg19.png` 페이지는 출력이 안된다. 왜 그런가?

![error img](./imgFolder/expressStudyIMG23.png)

## ANSWER_8

`http://localhost:4000` , `http://localhost:4000/imgURL/expressStudyImg19.png` 2개의 링크에서 모두 보이게 하기 위해서는 아래와 같은 소스를 사용하면 된다.

```javascript
app.use('/imgURL', express.static('imgFiles'))
```

```pug
html
    head
    body
        #testBox(style="width : 100px; height : 200px; background-color : aqua")
        img(src="../../imgURL/expressStudyIMG18.png")
```

이렇게 작성하면 모든 링크에서 접근이 가능하다.
app.use 안의 `'/imgURL'` 과 img(src="../../`imgURL`/expressStudyIMG18.png") 안의 `imgURL` 만 맞춰주면 된다.

---

## QUESTION_9 : fromt to back, back to front data send

여기 있는 링크에 소스가 있다. 이 소스에서 변수를 js 파일에서 template 으로 데이터를 보낼 때 아래와 같이 js 파일마다 모두 설정해야 하나?

**[SOURCE-index.js]**

```javascript
//생략

//******************************
app.use((req,res,next)=>{
    app.locals.isLogin=true;
    next();
})
//******************************

//셍략
```

**[SOURCE-apple.js]**

```javascript
//생략

routerOfApple.use((req,res,next)=>{
    routerOfApple.locals.isLogin = true;
    next();
})

//생략
```

## ANSWER_9

## QUESTION_10 : middleware 실행순서

미들웨어 함수, app.use 같은 미들웨어의 실행순서?

## ANSWER_9

```javascript
app.use(/*use 1*/)
app.use(/*use 2*/)

function test1(params) {/*내용*/}
function test2(params) {/*내용*/}
app.get('/', test1, test2, (req,res,next)=>{//app.get<1>
    //내용
})
app.get('/testLink', test1, (req,res,next)=>{//app.get<2>
    //내용
})
```

위의 함수들의 실행순서는 아래와 같다.

![middleware 실행순서 img](./imgFolder/expressStudyIMG27.png)
