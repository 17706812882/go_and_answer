import React from 'react';
require('./login.css');
export default class Login extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="login-box">
        <table>
          <tr>
            <td>用户名:</td><td><input type="text" placeholder="请输入"/></td>
          </tr>
          <tr><td>密码:</td><td><input type="password" placeholder="请输入"/> </td></tr>
          <tr><td colSpan="2"><input type="button" value="登录"/></td></tr>
        </table>
      </div>
    );
  }
}
