import React, { Component } from 'react';

class TOC extends Component {
  render(){
    var lists = [];
    var data = this.props.data
    console.log("콘솔 확인용 : ", data);
    console.log("콘솔 확인용 : ", this.props.data);
    
    var i = 0;
    while(i < data.length){
      lists.push(<li>
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