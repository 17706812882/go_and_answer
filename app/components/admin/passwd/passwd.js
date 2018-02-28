import React from 'react';
require("./passwd.css")
export default class Passwd extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="passwd-box">
        <table>
          <tr><td>旧密码:</td><td><input type="text"/></td></tr>
          <tr><td>新密码:</td><td><input type="text"/></td></tr>
          <tr><td>请确定密码:</td><td><input type="text"/></td></tr>
        </table>
        <input type="button" value="立即认证"/>
      </div>
    );
  }
}
