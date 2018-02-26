import React from 'react';
require('./item.css');
var itemData   = require('../../data/item.json')

export default class Item extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
      var selectedGroupId = this.props.selectedGroupId;
      var groupItemData;
      console.log("selectedGroupId:"+selectedGroupId);
      for(var i=0;i<itemData.length;i++){
        var groupItems = itemData[i];
        if(groupItems.groupId == selectedGroupId){
          groupItemData = groupItems.items;
          console.log("find group in items:"+groupItemData.totalCount)
        }
      }
      var list = (currentIndex) => {
        console.log("currentIndex:"+currentIndex);
        var currentItem = groupItemData.rows[currentIndex];
        console.log("currentItem:"+groupItemData);
        var res = [];

        for(var i=0;i<currentItem.options.length;i++){
        res.push(<ui key={i}>{currentItem.options[i]}</ui>);
        console.log("add options")
      }
      return res;
    }
    return (
      <div className="itemBox">
        本题组共有[{groupItemData.totalCount}]到题目，当前第[{groupItemData.currentIndex}]道题
        <div className="itemContent">
          {<span>题目:{groupItemData.rows[groupItemData.currentIndex].content}</span>}
          <ul className="itemAnswerBox">
            {list(groupItemData.currentIndex)}
          </ul>
          <div>你的答案:<input type="text" /></div>
        </div>
      </div>

    );
  }
}
