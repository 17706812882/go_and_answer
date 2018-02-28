import React from 'react';
export default class User extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <span>我的中奖纪录</span>
        <hr/>
        <span>对不起,暂无记录!</span>
      </div>
    );
  }
}
