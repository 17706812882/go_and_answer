import React from 'react';
require('./group.css');
var groupData   = require('../../data/group.json')


/**
 * 题组的列表，单击之后，将展示对应的所有题目
 */
export default class Group extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGroup:1
    }
  }

  /**
   * 单击题组标题，更新状态，同时调用父组件回调方法
   * @param i
   */
  handleClick = (i)=>{
    console.log("Group component id changed : " + i);
    this.setState({selectedGroup: i});
    this.props.callbackParent(i);
  }

  render() {
    var list = (rows) => {
      var res = [];
      for(var i = 0; i < rows.length; i++) {
        res.push(
          <div className="groupLine" key={i} onClick={this.handleClick.bind(this, rows[i].id )}>
            <div className="groupHead">{ rows[i].title }</div>
            <div className="groupRemark">{ rows[i].remark }</div>
          </div>)
      }
      return res;
    }
    return (
      <div className="groupBox">
        题组中共有 [{groupData.totalCount}]
        {list(groupData.rows)}
      </div>
    );
  }
}
