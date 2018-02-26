import React from 'react';
require('./App.css');

import Group from './questionGroup/group';
import Item from './questionItem/item';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroupId:1
    }
  }
  /**
   * 当group组件处理好单击事件之后，会调用父组件的方法，父组件更新状态，重新渲染，同时ITEM组件也会更新
   * @param newState
   */
  onGroupChanged = (newState)=>{
     console.log("App get Group Change Id :" + newState) ;
     this.setState({selectedGroupId: newState});
  }
  render() {
    return (
      <div>
        <div className="topBox">
          <h1>全民共进</h1>
        </div>
        <div className="leftBox">
          <Group callbackParent={this.onGroupChanged}></Group>
        </div>
        <div className="rightBox">
          <Item selectedGroupId={this.state.selectedGroupId}></Item>
        </div>
        <div className="bottomBox">
          <span>全国百家电视台支持，3亿观众互动参与</span>
        </div>
      </div>
    );
  }
}
