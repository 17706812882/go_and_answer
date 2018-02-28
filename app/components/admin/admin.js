import React from 'react';
require('./admin.css');

import Coin from './coin/Coin';
import Lucky from './lucky/Lucky';
import Money from './money/Money';
import Realauth from './realauth/Realauth';
import Passwd from './passwd/Passwd';
import User from './user/User';
import Withdraw from './withdraw/Withdraw';


export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opIndex:'admin_user'
    }
  }

  switchMenu = (i)=>{
    console.log("switch to admin menu : " + i);
    this.setState(
      {opIndex:i}
    );
  }


  render() {


    var showOp = () => {
      var res = [];

      if(this.state.opIndex == 'admin_user'){
        res.push(<User/>);
      }else if(this.state.opIndex == 'admin_money'){
        res.push(<Money/>);
      }else if(this.state.opIndex == 'admin_web_coin'){
        res.push(<Coin/>);
      }else if(this.state.opIndex == 'admin_lucky'){
        res.push(<Lucky/>);
      }else if(this.state.opIndex == 'admin_withdraw'){
        res.push(<Withdraw/>);
      }else if(this.state.opIndex == 'admin_real_auth'){
        res.push(<Realauth/>);
      }else if(this.state.opIndex == 'admin_reset_passwd'){
        res.push(<Passwd/>);
      }
      return res;
    }


    return (
      <div >
        <div className="admin-menu-box">
          <ul className="admin-menu">
            <li className="admin-menu-item"  onClick={this.switchMenu.bind(this, 'admin_user' )}>个人中心</li>
            <li className="admin-menu-item"  onClick={this.switchMenu.bind(this, 'admin_money' )}>现金明细</li>
            <li className="admin-menu-item"  onClick={this.switchMenu.bind(this, 'admin_web_coin' )}>全民币明细</li>
            <li className="admin-menu-item"  onClick={this.switchMenu.bind(this, 'admin_lucky' )}>我要抽奖</li>
            <li className="admin-menu-item"  onClick={this.switchMenu.bind(this, 'admin_withdraw' )}>我要提现</li>
            <li className="admin-menu-item"  onClick={this.switchMenu.bind(this, 'admin_real_auth' )}>实名认证</li>
            <li className="admin-menu-item"  onClick={this.switchMenu.bind(this, 'admin_reset_passwd' )}>密码重置</li>
          </ul>
        </div>
        <div className="admin-op-box">
          <table>
            <tr>
              <td>用户:</td><td>13506713021</td><td>等级:</td><td>无</td>
            </tr>
            <tr>
              <td>全民币:</td><td>0个</td><td>现金:</td><td>0.00元</td>
            </tr>
          </table>
          <hr/>
          {showOp()}
        </div>

      </div>
    );
  }
}
