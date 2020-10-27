# Node.js Study Chapter1
**study by FastCampus part1**

## Before start Nodejs

기본적으로 nodejs 는 window, mac, ubontu 모두를 지원한다.

![nodejs apply](./imgFolder/nodejsIMG1.png)

여기서 LTS 는 Long Term Service 의 약자로 오랜시간동안 지원을 하기로 약속된 nodejs의 기능을 가지고 있는 nodejs 환경이며 current version 은 최신의 nodejs 를 사용할 수 있는 환경이다. 공부를 하기 위한 nodejs 이므로 Current version 를 설치하는 것이 좋다.

## 1. Browser js VS Node.js

기본적으로 Nodejs 역시 javascript 를 기반으로 만들어진 런타임이므로 거의 대부분의 문법을 javascript와 공유하나 일부는 다르다. 이에 대해 알아보자.

### 1. window 객체

window 객체는 브라우저창을 나타내는 객체이다. 이러한 window 객체는 Browser 가 존재하는 부분 즉 프론트에서만 쓰이게 된다. Nodejs는 백엔드를 작업하는 런타임이므로 이러한 브라우저 창이 없다.

### 2. webpack

프론트엔드의 개발에 있어서 외부 웹팩을 접근하여 사용할 때 import 를 사용한다. 하지만 nodejs에서는 별도의 세팅이 없을 경우 require 를 통해 웹팩을 정의하거나 사용할 수 있다.

## 2. npm

npm 은 nodejs 에서 사용하는 package manager 이다. npm 에 관련된 몇가지 명령어를 알아보자.

1. npm install `packagename` -s / npm install `packagename` -g

-s : `packagename` 이라는 패키지를 해당 폴더 안에 설치한다.
-g : `packagename` 이라는 패키지를 해당 폴더 외에서도 쓸 수 있게 전역에 설치한다.

2. npm init

npm init 은 기본적으로 npm 모듈을 사용하기 위해 초기화를 해 주는 명령어인데. 로컬터미널로 이 명령어를 실행하면 오류가 발생한다. 따라서 이러한 오류문구의 제거를 위해 `npm install express --save-dev` 명령어를 먼저 사용한다.

3. npx

npx 는 설치를 하지만 그 후에 실행을 바로 할 수 있도록 도와주는 명령어이다. npx 는 실행이 주요한 목적으로 사용하는데 react 를 배울 때 다시 공부해보자.

4. npm uninstall `packagename` -s / npm uninstall `packagename` -s

-s : `packagename` 이라는 로컬에 설치된 파일을 제거한다.
-g : `packagename` 이라는 전역에 설치된 파일을 제거한다.

## 3. Sementic versioning

Sementic versioning 은 npm 에서 제공하는 버전관리 규약이다. 주로 x . y. z 같이 3자리로 사용을 하는데 3자리로 사용하는 버전이라고 해서 npm 이 제공하는 규칙을 따르는 것은 아니다. 이에 대해 알아보자.

* **처음 release** 되는 프로그램의 version 은 **1.0.0 부터 시작**한다.
* bug fix를 한 후 **하위 버전과 호환이 되면** **3번째 자리만 숫자가 올라간다**.
* **하위호환이 가능**하지만 **새로운 기능이 추가**되었을 때 **2번째 자리가 올라간다**.
* **하위호환이 되지 않는 중대한 변화**나 **소스의 수정**이 있으면 **첫번째 자리가 올라간다**.

|Code Status|Stage|Rule|Example|
|--|--|--|--|
|First Release|New product|Start With 1.0.0|1.0.0|
|Backword compatible bug fixes|Patch release|Increment the third digit|1.0.1|
|Backword compatible new features|Minor release|Increment the middle digit and reset last digit to zero|1.1.0|
|Changs that break backward compatibility|Major release|Increment the first digit and reset middle and last digits to zero|2.0.0|
