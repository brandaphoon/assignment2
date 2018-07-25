import { Form, Select, Input, Button, Row, Col } from 'antd';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Forms.css'


const FormItem = Form.Item;

class form1 extends Component {

  constructor(){
    super();
    this.state = {
        title: 'title',
        network: '',
        system:''
    }

}
  static defaultProps = { //these are the default options in the dropbox
    networkcategories: ['POP','ORD', 'OCS'],
    systemcategories:['Optimus','Prime','Bumblebee']
}

  state = {
    redirect: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.setState({ redirect: true });
      }
    });
  }

  render() {

    let networkOptions = this.props.networkcategories.map(network => { //mapping the network data 
      return <option key={network} value={network}>{network}</option> //creating the option box 
  })

  let systemOptions = this.props.systemcategories.map(system => { //mapping the network data 
      return <option key={system} value={system}>{system}</option> //creating the option box 
  })
 
    const { getFieldDecorator } = this.props.form;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/table'/>;
    }

    return (

      <div>
         <h1><strong>SUBMIT NEW REQUEST</strong></h1>
          <br/>
         <h3><strong>BASIC INFO</strong></h3>
        <Form onSubmit={this.handleSubmit}>
          <div className = "outline">
            <Row>
              <FormItem
              label="Request Title"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
              >
              {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please input the request title!' }],
              })(
                  <Input placeholder="Input title here" style={{ width: 600 }} autocomplete="off"/>
              )}
              </FormItem>
            </Row>
            <br/>
            <Row>
              <Col span={10}>    
                <FormItem
                  label="Network"              
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('network', {
                    rules: [{ required: true, message: 'Please select the network!' }],
                  })(
                    <Select
                      placeholder="POP"
                      style={{ width: 125 }}
                    >
                      {networkOptions} 
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem
                  label="System"
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 12 }}
                >
                  {getFieldDecorator('system', {
                    rules: [{ required: true, message: 'Please select the system!' }],
                  })(
                    <Select
                      placeholder="OPTIMUS"
                      style={{ width: 125 }}
                    >
                    {systemOptions}
                    </Select>
                  )}
                </FormItem>
               </Col>
            </Row>
          </div>
          <FormItem
            wrapperCol={{ span: 12, offset: 5 }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>

    );
  }
}

const WrappedApp = Form.create()(form1);

export default WrappedApp;