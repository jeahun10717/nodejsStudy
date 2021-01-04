# React.js Study By SHCD 1

## react 를 시작하며...

웹 사이트에서 모든 UI 를 본인이 작성한다면 그 시간과 수고는 가늠할 수가 없다. 이러한 단점을 극복하기 위해 많은 프로그래머들과 회사는 반복성 작업을 라이브러리로 만들어 두고 호환성까지 맞춰서 무료로 공개한다. 이러한 라이브러리의 대표로 `jquery` 가 있다. 하지만 `jquery` 는 모든 웹 브라우저에 호환성을 맞춰야 했으므로 필요없는 소스가 포함되어 있다. 즉 웹 페이지 성능이 떨어진다. 또한 jquery 는 기본적으로는 javascript 의 문법을 따르지만 독자적인 사용법이 존재한다. 이러한 단점을 극복하고 독자적인 문법이 아닌 웹 표준언어 ECMA script 로 사용자 인터페이스를 컨트롤하고 사용자가 필요한 모듈만을 사용하여 속도를 개선한 라이브러리가 `React` 이다.

## 1. react 다운, 환경설정

`react` 를 사용할 때 `nodejs` 라는 런타임을 사용한다. `nodejs` 가 제공하는 `npm` 으로 다운하면 된다.

### 1.1. package.json, npm 으로 다운

```
$ npm install create-react-app -s
```

위의 방식으로 다운로드를 진행하면 `npm` 으로 다운을 진행하는 것이고 `node_modules` 에 다운이 된다. `react` 공식 홈페이지에서는 `npx` 로 설치를 권장한다. 실행방법은 아래와 같다.

```
$ npx create-react-app <폴더이름>
```

### 1.2. create-react-app

```
$ create-react-app <폴더이름>
```

`<폴더 이름>` 폴더 안에 `react` 와 관련된 파일들이 작성된다.

### 1.3. global 설치

```
$ npm install create-react-app -g
```

`-g` 명령어는 `global` 로 설치를 하라는 명령어 이다. 이렇게 설치를 하게 되면 `pc` 에 존재하는 모든 폴더에서 접근이 가능하다.


### 1.4. react 실행

`nodejs` 에서 `npm init` 을 하게 되면 `package.json` 이라는 모듈관리 파일이 생성된다. 여기서 `script` 부분을 편집하여 원하는 터미널 명령어를 사용자화 할 수 있는데 `create-react-app <폴더이름>` 을 했을 때 생기는 `package.json` 파일 안에 아래의 실행 명령어가 들어 있다.


```
$ npm run start
```

위의 과정을 거치고 나면 자동으로 브라우저가 하나 실행되며 아래와 같은 창이 뜨게 된다.

![react실행 img](./imgFolder/reactJS_IMG1.png)

### 1.5. js 코드 수정

**[ /src/App.js ]**

```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      //생략
    </div>
  );
}

export default App;

```

초기 설정은 위와 같다. 하지만 우리는 `함수형`으로 `App()` 을 사용하는 것이 아니라 `클래스` 형태로 사용할 것이다. `클래스` 형태는 아래와 같다.

**[ /src/App.js ]**

```javascript
import logo from './logo.svg';
import React, { Component } from "react"; //객체를 사용하기 위한 React 설정
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        //생략
      </div>
    );
  }
}

export default App;
```

### 1.6. css 코드 수정

**[ /src/App.css ]**

```css
body{
  background-color: aqua;
}
```

위의 디렉토리의 `App.css` 를 수정하면 된다.

### 1.7. React 배포

우리가 create-react-app <폴더이름> 으로 만들어낸 폴더는 그 용량 자체가 지나치게 크다. 또한 브라우저 내에서 네트워크 환경에 들어가서 확인을 해 보면 아무것도 하지 않았는데 1.7 mb 라는 용량을 잡아먹는다. 이는 React 자체에서 지원하는 여러가지 개발도구들이 존재하기 때문인데 이 상태로 그대로 배포하게 되면 웹페이지 성능에 문제가 생긴다. 따라서 우리는 이제 아래와 같은 명령어를 사용하여 업로드 한다.

```
$ npm run bulid
```

위의 명령어는 `React` 에서 프로그래머가 사용한 모듈들과 기능들만을 남기고 나머지는 날리는 작업을 한다. 그리고 그 파일과 폴더들을 `build` 라는 폴더에 저장을 하는데 배포할 때 이 build 폴더를 배포하면 된다.

## 2. React : Component Control

위에서 `React` 를 설치하고 초기설정을 해 보았다. 이제 본격적으로 `React` 를 사용해 보자.

### 2.1. React 를 사용하는 이유

만약 우리가 아래와 같은 코드가 있다고 가정해보자.

**[ /public/pure.html ]**

```html
<html>
    <body>

        <header>
            <h1>Web</h1>
            World Wide Web    
        </header>

        <ul>
            <li><a href="1.html">Html</a></li>
            <li><a href="2.html">Css</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>

        <h2>HTML</h2>
        Html is Hypertext MarkUp Language
    </body>
</html>
```

위의 `header` 부분이 만약 엄청나게 길다면? 그리고 그 코드를 자주 많이 사용한다면 어떻게 될까? 코드가 복잡해지고 한 눈에 들어오지도 않을 것이다. 또한 수정사항이 있다면 `header` 부분이 사용된 모든 소스를 찾아서 수정해야 한다. 하지만 이 부분을 태그화 해서 다른 파일에서 접근이 가능하면 소스의 유지보수성과 가독성이 매우 증대된다. 이러한 기능을 지원하는 것이 `React` 의 장점이다.

### 2.2. Component 만들기

이제 위의 소스에서 header 부분을 Component 로 만들어보자

**[ /src/App.js ]**

```javascript
class Subject extends Component {
  render(){
    return (
      <header>
        <h1>Web</h1>
        World Wide Web    
      </header>
    );
  }
}


class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  }
}
```

이제 메인페이지의 실행결과를 보자.

![react component 결과](./imgFolder/reactJS_IMG2.png)

위 사진의 오른쪽 개발자창에서 볼 수 있듯이 우리가 작성한 `Subject` 태그가 보이지 않는다. 즉 우리가 작성한 `react` 코드는 노출이 되지 않고 최종 결과값만 노출되게 된다.</br>

이제 위의 pure.html 을 모두 Component 로 바꿔보자.

**[ /src/App.js ]**

```javascript
//생략
class Subject extends Component {
  render(){
    return (
      <header>
        <h1>Web</h1>
        World Wide Web    
      </header>
    );
  }
}

class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">Html</a></li>
          <li><a href="2.html">Css</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h2>HTML</h2>
        Html is Hypertext MarkUp Language
      </article>   
    )
  }
}


class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
```

위의 소스의 `Component` 들이 각각 엄청나게 긴 소스라고 생각해 보자. 이러한 소스들을 이렇게 정리하고 유지보수 할 수 있는 것이 매우매우 효율적이라고 할 수 있다.

### 2.3. props

위에서 기본적인 Component 를 만들어 보았다. 그런데 만약에 일반적인 태그에서 style 이나 src 등 속성을 지원하는 것처럼 내가 만든 Component 에 속성을 줄 수 있다면 어떨까?

```javascript
class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
```

![react props img](./imgFolder/reactJS_IMG3.png)

만약 위의 소스에서 아래와 같이 `title` 속성을 설정하고 이 `title` 이 `web` 일 땐 브라우저 상에 `WEB` 을 출력하고 `mobile` 일 땐 `MOBILE` 을 출력하는 태그를 만들 수 있다면 좀 더 다이나믹 한 소스를 짤 수 있을 것이다.

```html
<Subject title="web"></Subject>
<Subject title="mobile"></Subject>
```

**props 사용법**

```javascript
class tagName extends Component {
  render(){
    return (
      <tag>
        {this.props.title}   //여기서 this 는 tagName 객체(js 에서 클래스도 객체이므로) 를 가리킴
        {this.props.sub}     //여기서 this 는 마찬가지로 tagName 객체를 가리킴
      </tag>
    );
  }
}
```

위의 주석에도 적혀 있듯이 `this` 는 `tagName` 이라는 객체를 가리킨다.</br>

또한 `this.props.title` 은 `tagName` 의 `title` 을 설정한다. `this.props.sub` 역시 마찬가지. 구체적인 예는 아래와 같다.

**[ /src/App.js ]**

```javascript
//생략
class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="Mobile" sub="this is mobile"></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
//생략
```

**[ 결과창 ]**

![react props control img](./imgFolder/reactJS_IMG4.png)

이제 `title` 과 `sub` 를 통해 간단하게 태그안의 텍스트를 컨트롤 할 수 있게 되었다. 예제로 Mobile 과 그 밑의 텍스트를 바꿔보자.

```JavaScript
class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="Mobile - Android or Apple" sub="텍스트 변경이 가능!!!"></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
```

![react props control img 2](./imgFolder/reactJS_IMG5.png)

다른 것을 건드리지 않고 `class` 의 `title`, `sub` 만을 바꾸었는데 정상적으로 바뀐 것을 알 수 있다.

### 2.4. Component 파일 분리

`react` 로 작업을 진행 할 때 `component` 를 만들 떄마다 한 개의 파일 안에 모두 집어 넣으면 읽기도 불편하고 뭔가를 찾아야 할 때 매우 불편할 것이다. 이러한 문제점은 우리가 `모듈화`, 즉 파일을 분리하므로써 관련성 있는 파일들을 따로 모아 관리하면 유지보수가 쉬울 것이다.</br>

**[/src/App.js]**
커밋 : `React Study By 상활코딩 7 ~ 12 강upload`
```javascript
//생략
class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">Html</a></li>
          <li><a href="2.html">Css</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>   
    )
  }
}


class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
//생략
```

현재는 위와 같이 `App.js` 파일 안에 `Subject`, `TOC`, `Content` component 가 모두 들어 있다. 이를 모듈화해서 파일화 해보자.</br>

`/src/component` 라는 폴더 안에 `subject.js`, `TOC.js`, `content.js` 라는 파일을 만들어 각각의 `component` 를 저장할 것이다.

**[ /src/App.js ]**

```javascript
import React, { Component } from "react";
import TOC from './components/TOC'          // TOC.js 파일에서 TOC 객체(class) 가져옴
import Content from './components/content'  // content.js 파일에서 Content 객체(class) 가져옴
import Subject from './components/subject'; // subject.js 파일에서 Subject 객체(class) 가져옴
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="Mobile - Android or Apple" sub="텍스트 변경이 가능!!!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText MarkUp Language."></Content>
      </div>
    );
  }
}

export default App;
```

**[ /src/component/TOC.js ]**

```javascript
import React, { Component } from 'react';

class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">Html</a></li>
          <li><a href="2.html">Css</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

export default TOC;  // TOC 객체 외부에서 참조할 수 있게 내보냄
```

**[ /src/component/content.js ]**

```javascript
import React, { Component } from 'react';

class Content extends Component {
    render(){
    return(
        <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        </article>   
    )
    }
}

export default Content;  // Content 객체 외부에서 참조할 수 있게 내보냄
```

**[ /src/component/subject.js ]**

```javascript
import React, { Component } from 'react'

class Subject extends Component {
    render(){
      return (
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject;  // Subject 객체 외부에서 참조할 수 있게 내보냄
```

위의 구조대로 코딩하면 정상적으로 작동한다. 소스는 [commit name : React Study By 생활코딩 14 강 upload](https://github.com/jeahun10717/nodejsStudy/commits/master)을 참조하라

### 2.5. state

`props` 는 함수의 매개변수처럼 컴포넌트에 전달이 가능한 반면 `state` 는 함수 내에 선언된 `let` 처럼 컴포넌트 안에서만 관리가 된다. 이는 **사용자와 프로그래머가 접근 할 수 있는 요소를 분리** 시켜 양쪽의 편의성을 각각 증진시키게 된다. 이는 아래의 내용에서 알아보면서 이해해 보자.

#### 2.5.1. constructor

1. `constructor` 는 `state` 를 사용하기 위해 컴포넌트를 초기화 하는 역할을 담당한다.
2. `constructor` 는 반드시 `render` 위에 존재해야 한다.(초기화를 담당하기 때문)

**[ /src/App.js ]**

```javascript
//생략
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      subject:{title:'WEB', sub:'world wide web'}
    }
  }
  render(){
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText MarkUp Language."></Content>
      </div>
    );
  }
}
//생략
```

여기서 `App.js` 의 실행파일인 `index.js` 의 `<App></App>` 태그는 각각의 컴포넌트의 `state` 에 접근이 불가하다. 또한 상위 컴포넌트인 `App` 의 `state` 를 하위 컴포넌트인 `Subject` 의 `props` 로 전달하는 것도 가능한 것을 볼 수 있다.

이러한 state 를 이용하여 기존의 코드를 바꿔보자.

**[ 기존코드 : /src/components/TOC.js ]**

```javascript
import React, { Component } from 'react';

class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">Html</a></li>
          <li><a href="2.html">Css</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

export default TOC;  // TOC 객체 외부에서 참조할 수 있게 내보냄
```

**[ 기존코드 : /src/App.js ]**

```javascript
//생략
class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="Mobile - Android or Apple" sub="텍스트 변경이 가능!!!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText MarkUp Language."></Content>
      </div>
    );
  }
}

export default App;
```

**[ state 사용 코드 : /src/components/TOC.js ]**

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

**[ state 사용 코드 : /src/App.js ]**

```javascript
//생략
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      subject:{title:'WEB', sub:'world wide web'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JS is for interactive'}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText MarkUp Language."></Content>
      </div>
    );
  }
}
//생략
```

**[ state 사용 코드 : /src/App.js ]** 에서 `TOC` 태그에 `data` 라는 `props` 에 `{this.state.contents}` 를 삽입했다. 태그 발견 후 `TOC.js` 가 실행될 것이다.  `TOC.js` 에서는 `TOC` 컴포넌트 안의 `props` 중 `data` 라는 `props` 를 찾으면 기존에 저장해 두었던 아래와 같은 배열이 저장되어 있다.

```javascript
[
  {id:1, title:'HTML', desc:'HTML is HyperText ...'},
  {id:2, title:'CSS', desc:'CSS is for design'},
  {id:3, title:'JavaScript', desc:'JS is for interactive'}
]
```

이 배열의 길이만큼 반복문을 돌아서 **[ 기존코드 : /src/components/TOC.js ]** 에서의 `li` 태그들을 출력한다. 이렇게 되면 TOC 에서 직접 코드를 수정하지 않고 `App.js` 의 `this.state.contents` 배열을 수정하여 `TOC` 의 `data` 를 수정할 수 있게 된다.<br>

cf : 위의 소스에서 `key` 속성은 `react` 가 제공하는 형식을 맞춰주기 위해 사용하는 소스이다 `key` 를 명시하지 않으면 아래와 같은 오류가 발생한다.

![none key error message](./imgFolder/reactJS_IMG6.png)

### 2.6. event - props & state

웹페이지에서 이벤트를 컨트롤해서 더욱 다이나믹한 소스를 만들어보자. 아래 페이지에서 `HTML`, `CSS`, `Javascript` 를 각각 클릭하면 동적으로 밑의 소스가 바뀌도록 하는 페이지를 만들어보자.

#### 2.6.1. event 초기단계

![dynamic web event](./imgFolder/reactJS_IMG3.png)

`React` 에서 `state` 값이 변경되면 하위의 `render` 함수가 재호출된다.

**[ /src/App.js ]**

```javascript
//생략
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode: 'welcome',
      subject:{title:'WEB', sub:'world wide web'},
      welcome: {title:'Welcome', desc:'Hello, React!'},
    //생략
    }
  }
  render(){
    console.log('App render');
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
//생략
```

위의 조건문은 `this.state.mode` 에 따라 `Content` 컴포넌트가 출력하는 텍스트가 달라진다.

**[ mode 가 welcome 일 때 화면 ]**

![this.state.mode==='welcome'](./imgFolder/reactJS_IMG7.png)

이제 빨간 밑줄 친 부분에서 `welcome` 을 `read` 로 바꿔보자.

![this.state.mode==='read'](./imgFolder/reactJS_IMG8.png)

원래의 `Welcome` 과 `Hello`, `React` 가 아닌 `HTML` 과 그 텍스트가 출력됨을 알 수 있다. 위의 과정에서 `welcome` 에서 `read` 로 바꾸는 과정을 수동으로 했다. 이러한 과정을 버튼 입력 혹은 클릭으로 바꿀 수 있다. 아래에서 알아보자.

#### 2.6.2. event - a 태그 클릭 이용

위에서 `event` 를 `react` 개발자 창에서 바꾸는 것을 해 보았다. 이제 `a` 태그를 클릭하여 바꾸는 것을 해 보자.</br>

이벤트를 설정하는 것은 생각이상으로 복잡하므로 `Subject.js` 파일의 `render` 될 태그들을 `App.js` 에 그대로 붙여넣을 것이다.

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
          <h1><a href='/' onClick={function(){
            alert('hi')
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

원래의 `html` 에서 클릭 이벤트 설정은 모두 소문자로 작성하는 `onclick` 이나 **`react` 에서는 `onClick` 으로 설정하여야 한다.(대소문자 구분 주의 !!!)** 위의 소스는 `a` 태그를 클릭하면 `hi` 라는 경고창을 띄워주고 페이지를 `'/'` 로 리로딩한다. 페이지 리로딩 없이 다이나믹 하게 이벤트를 설정하는 것이 목표인데 우리의 목표와 맞지 않다. 리로딩 되는 이유는 위에서 밝혔듯 `a` 태그의 기본 속성 때문인데 이러한 속성을 초기화 해 주면 리로딩 없이 이벤트 설정이 가능하다.

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

이제 `this.state.mode` 을 `welcome` 으로 바꾸는 소스를 짜 보자.</br>

아래의 소스에서 bind 를 쓰지 않았을 때 오류가 발생하는데 이 오류에 관해서는 `question 모음-Q&A 2` 에서 해결할 것이다.

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
              //this.state.mode='welcome' // <= mode 값 안 바뀜
              this.setState({  // * 이 부분 중요! *
                mode:'welcome'
              })
          }.bind(this)}>{this.state.subject.title}</a></h1>
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

위의 중요표시 해 놓은 라인을 보자. 원래의 소스는 그 위의 소스인데 위의 소스는 동작하지 않는다. `state` 를 수정하기 위해서는 `react` 가 제공하는 함수인 `setState` 를 사용하여야 한다. 사용방법은 위의 방법을 참고하라.
