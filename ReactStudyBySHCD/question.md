# QUESTION & ANSWER
* React 공부하면서 나온 질문 외에도 다른 질문도 할거임

|Q&A index|해결 여부|
|-----|-----|
|1. 배열에 html 태그 저장후 배열 출력|X|
|||
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
