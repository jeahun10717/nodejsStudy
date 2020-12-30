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


### 1.4 react 실행

`nodejs` 에서 `npm init` 을 하게 되면 `package.json` 이라는 모듈관리 파일이 생성된다. 여기서 `script` 부분을 편집하여 원하는 터미널 명령어를 사용자화 할 수 있는데 `create-react-app <폴더이름>` 을 했을 때 생기는 `package.json` 파일 안에 아래의 실행 명령어가 들어 있다.


```
$ npm run start
```

위의 과정을 거치고 나면 자동으로 브라우저가 하나 실행되며 아래와 같은 창이 뜨게 된다.

![react실행 img](./imgFolder/reactJS_IMG1.png)

### 1.5 js 코드 수정

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

### 1.6 css 코드 수정

**[ /src/App.css ]**

```css
body{
  background-color: aqua;
}
```

위의 디렉토리의 `App.css` 를 수정하면 된다.

### 1.7 React 배포

우리가 create-react-app <폴더이름> 으로 만들어낸 폴더는 그 용량 자체가 지나치게 크다. 또한 브라우저 내에서 네트워크 환경에 들어가서 확인을 해 보면 아무것도 하지 않았는데 1.7 mb 라는 용량을 잡아먹는다. 이는 React 자체에서 지원하는 여러가지 개발도구들이 존재하기 때문인데 이 상태로 그대로 배포하게 되면 웹페이지 성능에 문제가 생긴다. 따라서 우리는 이제 아래와 같은 명령어를 사용하여 업로드 한다.

```
$ npm run bulid
```

위의 명령어는 `React` 에서 프로그래머가 사용한 모듈들과 기능들만을 남기고 나머지는 날리는 작업을 한다. 그리고 그 파일과 폴더들을 `build` 라는 폴더에 저장을 하는데 배포할 때 이 build 폴더를 배포하면 된다.

## 2. React

위에서 `React` 를 설치하고 초기설정을 해 보았다. 이제 본격적으로 `React` 를 사용해 보자.

### 2.1 React 를 사용하는 이유

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

### 2.2 Component 만들기

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

### 2.3 props

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
        {this.props.title}   //여기서 this 는 tagNanme 객체(js 에서 클래스도 객체이므로) 를 가리킴
        {this.props.sub}     //여기서 this 는 마찬가지로 tagNanme 객체를 가리킴
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
