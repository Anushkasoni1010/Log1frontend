import React from 'react';

import 'antd/dist/antd.css';
import { Card, Col, Row, Icon, Button,Tooltip} from 'antd';

const ButtonGroup = Button.Group;

class Dmain extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
    <div style={{ background: '#ECECEC', padding: '20px', marginLeft:60, marginRight:80 ,marginTop:0}}>
    <ButtonGroup  value="small" style={{ marginBottom: 16, position: 'absolute', right:140 }}>
      <Button>Last Day</Button>
      <Button>Week</Button>
      <Button>Month</Button>
    </ButtonGroup>
    <Row gutter={16} style={{ marginTop: 40 , textAlign:'left'}}>
      <Col span={12}>
        <Card style={{ fontSize: 20, height:180}}>
          <h3 style={{textAlign:'center', fontFamily:"ModernEra", fontSize:30}}>Projects</h3>
  
          <Col span={12}>
          <Tooltip placement="left" title="Pass">
            <div>
              <Icon type="flag" theme="twoTone" twoToneColor="#52c41a" style={{ fontSize:23 }}/>       45
            </div>
          </Tooltip>
          </Col>
        
        
        <Col span={12}>
        <Tooltip placement="left" title="Joined">
          <div>
            <Icon type="flag" theme="twoTone" twoToneColor="#0109fe" style={{ fontSize:23 }}/>     22
          </div>
        </Tooltip>
        </Col>
    
        
        <Col span={12}>
          <Tooltip placement="left" title="Fail">
            <div>
              <Icon type="flag" theme="twoTone" twoToneColor="#fe0101" style={{ fontSize:23 }}/>    15
            </div>
          </Tooltip>
        </Col>
      
    
        <Col span={12}>
        <Tooltip placement="left" title="Not Joined">
          <div> 
            <Icon type="flag" theme="twoTone" twoToneColor="#646260" style={{ fontSize:23 }}/>     78
          </div>
        </Tooltip>
        </Col>
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{ fontSize: 20, height: 180}}>
          <h3 style={{textAlign:'center', fontFamily:"ModernEra" ,fontSize:30}}>Interviews</h3>
          <Col span={12}>
          <Tooltip placement="left" title="Pass">
            <div>
              <Icon type="flag" theme="twoTone" twoToneColor="#52c14a" style={{ fontSize:23 }}/>    33
            </div>
          </Tooltip>
          </Col>
        
        <Col span={12}>
        <Tooltip placement="left" title="Fail">
          <div>
            <Icon type="flag" theme="twoTone" twoToneColor="#fe0101" style={{ fontSize: 23 }}/>    22
          </div>
        </Tooltip>
        </Col>
        </Card>
      </Col>
    </Row>
  </div>
    );
  }
}


 export default Dmain;