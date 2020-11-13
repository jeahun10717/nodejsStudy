# QUESTION & ANSWER
* express 공부하면서 나온 질문 외에도 다른 질문도 할거임

---

## QUESTION_1 : module.exports

module.exports = 변수 에서 module.exports 는 어디에 변수를 보내는 거?

## ANSWER_1



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
[link]()

---

## QUESTION_4

DOM 구조란?

## ANSWER_4

---

## QUESTION_5

```javascript
app.get('/', (req,res)=>{
  res.render('file');
  res.send('this is file of pug')
})
```

위의 소스는 동작하지 않는다. 이유는? => `res` 에 관해 공부하기

## ANSWER_5

---

## QUESTION_6

Refused to apply style MIME type error

1. 이거 오류 발생하는데 해결방법으로 static 설정을 추가하면 되는데 왜 추가해야 함?
2. 정확한 해결방법과 제일 좋은 방식으로 front 작성하는 방법은?
3.
질문에 대한 소스는 [이 링크의]() `4_viewInheritance` 폴더를 참고할 것
[이 링크](https://expressjs.com/ko/starter/static-files.html)를 참조하여 공부해 볼 것.

## ANSWER_6

---
