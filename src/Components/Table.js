import React, { Component } from 'react';
import { Table} from 'antd';
import uuid from 'uuid';


const { Column } = Table;

const data = [{
  key: uuid.v4(),
  title: 'Product Change Website',
  network: 'POP',
  system: 'Optimus'
}, {
  key: uuid.v4(),
  title: 'Social App',
  network: 'ORD',
  system: 'Prime'
}, {
  key: uuid.v4(),
  title: 'Ecommerce Shopping Cart',
  network: 'ORD',
  system: 'Bumblebee'
}];


  class table extends Component {
    
    render() {
        return (
            <div>
                    <Table dataSource={data}>
                        <Column
                            title="Request Title"
                            dataIndex="title"
                            key="title"
                        />
                        <Column
                            title="Network"
                            dataIndex="network"
                            key="network"
                        />
                        <Column
                        title="System"
                        dataIndex="system"
                        key="system"
                        />
                    </Table>
            </div>

        );
        }
  }
  

export default table;
