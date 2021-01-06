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
      selected_content_id : 2,
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
      let i = 0;
      while(i < this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id===this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;   
          break;
        }
        i++;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}
        >
        </Subject>
        <TOC data={this.state.contents}
             onChangePage={function (id) {
              this.setState({
                mode:'read',
                selected_content_id:Number(id)
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