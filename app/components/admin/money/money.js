import React from 'react';
export default class Money extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <span>现金明细</span>
        <hr/>
        <span>对不起,暂无记录!</span>
      </div>
    );
  }
}
