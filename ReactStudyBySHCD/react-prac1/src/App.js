import React, { Component } from "react";
import TOC from './components/TOC'
import Content from './components/content'
import Subject from './components/subject';
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