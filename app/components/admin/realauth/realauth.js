import React from 'react';
require("./realauth.css")

export default class Realauth extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="realauth-box">
        <table>
          <tr><td>姓名:</td><td><input type="text"/></td></tr>
          <tr><td>身份证:</td><td><input type="text"/></td></tr>
          <tr><td>手机号:</td><td><input type="text"/></td></tr>
          <tr><td>验证码:</td><td><input type="text"/><input type="button" value="点击获取验证码"/></td></tr>
        </table>
        <input  type="button" value="立即认证"/>
      </div>
    );
  }
}
