import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Row, Col } from 'antd';
import Menu from './Components/Menu';
//import Forms from './Components/Forms';
//import Form from './Components/Form';
import Paths from './Components/Paths';
//import Table from './Components/Table';
//import uuid from 'uuid';


class App extends Component {
  

    render() {
        return (
            <Row gutter={40}>
                <Col span={18} push={6}>
                    <div>
                        <h1>SPCR</h1>
                        <br/>
                        <Paths/>
                   </div>
                </Col>
                <Col span={6} pull={18}>
                    <div >
                        <Menu/>
                    </div>
                </Col>
            </Row>


        );
        }
  }
  

export default App;
