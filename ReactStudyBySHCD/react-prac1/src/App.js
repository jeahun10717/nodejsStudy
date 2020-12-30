import React, { Component } from "react";
import './App.css';

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