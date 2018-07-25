import { Input, Select, Button, Col, Row} from 'antd';
import React, { Component } from 'react';
import './Forms.css';

const InputGroup = Input.Group;
const Option = Select.Option;

class form2 extends Component{
    render() {

        return (
            <div>
                <div className="outline">  
                    <InputGroup>
                        <Row> 
                            <p>REQUEST TITLE:</p>
                            <Input placeholder="Input title here" style={{ width: 600 }} /> 
                        </Row>
                        <br/>
                        <Row className= "second">
                            <Col span={5}> 
                                <p>NETWORK:</p>
                                <Select
                                    placeholder="POP"
                                    style={{ width: 125 }}
                                >
                                <Option value="POP">POP</Option>
                                <Option value="ORD">ORD</Option>
                                <Option value="OCS">OCS</Option>
                                </Select>
                            </Col>
                            <Col span = {5}>
                                <p>SYSTEM:</p>
                                <Select
                                    placeholder="OPTIMUS"
                                    style={{ width: 125 }}
                                >
                                    <Option value="OPTIMUS">OPTIMUS</Option>
                                    <Option value="PRIME">PRIME</Option>
                                    <Option value="BUMBLEBEE">BUMBLEBEE</Option>
                                </Select>
                            </Col>
                        </Row>
                    </InputGroup>
                </div>
                <br/>
            

            </div>

        )
    }
}

export default form2;