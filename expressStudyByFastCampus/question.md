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

## ANSWER_3

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
