import React, { Component } from "react";
import TOC from './components/TOC'
import Content from './components/content'
import Subject from './components/subject';
import './App.css';

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

export default App;