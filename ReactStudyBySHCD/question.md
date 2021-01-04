# QUESTION & ANSWER
* React 공부하면서 나온 질문 외에도 다른 질문도 할거임

|Q&A index|해결 여부|
|-----|-----|
|1. 배열에 html 태그 저장후 배열 출력|X|
|2. this 가 지정하는 객체는?|X|
|||

---

# Q&A 1

배열에 html 태그 저장 후 배열 출력

## QUESTION_1

1. 아래와 같은 코드에서 `lists` 에 html 태그를 저장하는데 `lists[i]` 의 타입은?
2. `lists` 배열을 바로 `ul` 태그 밑에 사용하였는데 이게 왜 그대로 태그 출력이 되나?

```javascript
import React, { Component } from 'react';

class TOC extends Component {
  render(){
    var lists = [];
    var data = this.props.data
    var i = 0;
    while(i < data.length){
      lists.push(<li key={data[i].id}>
                  <a href={"/content/"+data[i].id}>{data[i].title}</a>
                 </li>)
      i++;
    }
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;
```

## ANSWER_1

---

# Q&A 2

익명함수의 `this`

## QUESTION_2

아래의 소스에서 `this.state.mode = 'welcome'` 라인에서 오류가 난다.

**[ /src/App.js ]**

```javascript
//생략
  render(){
    //생략
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href='/' onClick={function(e){
              console.log(e);
              e.preventDefault; // a 태그 기본 속성 없애기(링크 이동)
              this.state.mode = 'welcome'
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
//생략
```

이렇게 설정하면(함수 뒤에 `bind` 사용) 오류가 없어진다.

```javascript
function(e){
    console.log(e);
    e.preventDefault; // a 태그 기본 속성 없애기(링크 이동)
    this.state.mode = 'welcome'
}.bind(this);
```

## ANSWER_2
