import React, { Component } from "react";
import TOC from './components/TOC'
import Content from './components/content'
import Subject from './components/subject';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode: 'welcome',
      subject:{title:'WEB', sub:'world wide web'},
      welcome: {title:'Welcome', desc:'Hello, React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JS is for interactive'}
      ]
    }
  }
  render(){
    console.log('실행 순서 : App.js');
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
          sub={this.state.subject.sub}
          onChangePage={function(){
            alert('hi???')
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}
        >
        </Subject>
        <TOC data={this.state.contents}
             onChangePage={function () {
              alert(`hi`);
              this.setState({
                mode:'read'
              })
             }.bind(this)}
        >

        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;