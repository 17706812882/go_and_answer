import React from 'react';
require('./item.css');
var itemData   = require('../../../data/item.json')

export default class Item extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          currentIndex:0
      }
  }
    handleClick = (total,answerIndex)=>{
        console.log("Item option select : answerIndex=" + answerIndex+"|total="+total);

        if(this.state.currentIndex+1 == total){
            alert("已经答完所有的题目");
        }else{
            this.setState(
                {currentIndex:this.state.currentIndex+1}
            );
        }



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
            res.push(<ui key={i}><div onClick={this.handleClick.bind(this, groupItemData.totalCount,currentItem.options[i])}  className="optionBox">{currentItem.options[i]}</div></ui>);
            console.log("add options")
        }
      return res;
    }
    return (
      <div className="itemBox">
        本题组共有[{groupItemData.totalCount}]到题目，当前第[{this.state.currentIndex+1}]道题
        <div className="itemContent">
          {<span>题目:{groupItemData.rows[this.state.currentIndex].content}</span>}
          <ul className="itemAnswerBox">
            {list(this.state.currentIndex)}
          </ul>

        </div>
      </div>

    );
  }
}
