import React, { Component } from 'react';
import { Menu } from 'antd';
import './Menu.css';
import {Link} from 'react-router-dom';




class menu extends Component {

  render() {
    return (
        <div className="sider">
          <Menu theme="dark" mode="inline " style={{height:"100vh"}}> 
            <Menu.Item key="1">
            <Link to="/dashboard"><span>Dashboard</span></Link> 
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/Create"><span>Create</span></Link> 
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/assign"><span>Assign</span></Link>
            </Menu.Item>
          </Menu>
        </div>
          
    );
  }
}


    export default menu;