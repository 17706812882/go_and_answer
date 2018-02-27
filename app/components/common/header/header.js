import React from 'react';
import {Link} from 'react-router-dom';
require('./header.css');
export default class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  /**
   * 显示当前用户名和退出按钮
   * @returns {*}
   */
  render() {
    return (
      <div>
        <div className="topBox">
          <h1>全民共进</h1>
        </div>
      </div>
    );
  }
}
