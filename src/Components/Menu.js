import React, { Component } from 'react';
import { Menu } from 'antd';
import './Menu.css';




class menu extends Component {

  render() {
    return (
        <div className="sider">
          <Menu theme="dark" mode="inline " defaultSelectedKeys={['1']} style={{height:"100vh"}}> 
            <Menu.Item key="1">
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>Create</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>Assign</span>
            </Menu.Item>
          </Menu>
        </div>
          
    );
  }
}


    export default menu;