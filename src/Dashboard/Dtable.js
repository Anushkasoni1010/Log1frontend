import React from 'react';

import 'antd/dist/antd.css';
import { Table, Card, Icon } from 'antd';
import Dtable2 from './Dtable2';


  const data = [
    {
      key: '1',
      tname: 'ABC',
      submissions: 55,
      interviews: 87,
      po: 44,
      podenied: 11,
    },
    {
      key: '2',
      tname: 'SDF',
      submissions: 155,
      interviews: 147,
      po: 41,
      podenied: 10,
    },
    {
      key: '3',
      tname: 'REW',
      submissions: 315,
      interviews: 187,
      po: 44,
      podenied: 1,
    },
    {
      key: '4',
      tname: 'JKL',
      submissions: 115,
      interviews: 1117,
      po: 24,
      podenied: 10,
      },
  ];

  const columns1 = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data1 = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  
class Dtable extends React.Component {
    constructor() {
        super();
        this.state={
          showTable: false,
          arrow:false
        }
        this.buttonClick=this.buttonClick.bind(this);

    }
    

    buttonClick(){
         if(this.state.arrow===false)
         {
        // document.getElementById('b').style.width = '25%';
        document.getElementById('a').style.width = '25%';
        this.setState({arrow:true});
         }

         else 
         {
             document.getElementById('a').style.width='100%';
             this.setState({arrow:false});
         }
    
    }
    render() {
      const columns = [
        {
          title: 'Team Name',
          dataIndex: 'tname'
        },
        {
          title: 'No. of submissions',
          dataIndex: 'submissions',
        },
        {
          title: 'No. of Interviews',
          dataIndex: 'interviews',
        },
        {
          title: 'No. of PO',
          dataIndex: 'po',
        },
        {
          title: 'No. of PO denied',
          dataIndex: 'podenied'
        },
        {
            render: text => <Icon type="right" style={{ color: '#1D9AC7'}} onClick={() => this.buttonClick()} />
        }
      ];
        return(
            <Card style={{ padding:10 , marginTop: 20, marginLeft:40 , marginRight: 40}}>
            <div id='a'>
                <Table columns={columns} dataSource={data} size="middle" pagination={false} />
            </div>
            <div id='2' style={{paddingLeft:390, display:'none'}}>
                <Dtable2/>
            </div>
            </Card>
            
    );
    }
    
}

export default Dtable;